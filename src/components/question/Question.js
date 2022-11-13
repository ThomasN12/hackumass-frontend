import React, { useState, useContext, useEffect } from 'react'
import { CommentSection } from 'react-comments-section'
import "./Question.css";
import 'react-comments-section/dist/index.css'
import AuthContext from '../../store/auth-context';
import axios from 'axios';
const Question = (props) => {
    // const data = [
    //     {
    //         userId: '02b',
    //         comId: '017',
    //         fullName: 'Lily',
    //         userProfile: 'https://www.linkedin.com/in/riya-negi-8879631a9/',
    //         text: 'I think you have a point🤔',
    //         avatarUrl: 'https://ui-avatars.com/api/name=Lily&background=random',
    //         replies: []
    //     }
    // ]
    // const baseUrl = process.env.REACT_APP_URL;
    const ctx = useContext(AuthContext);
    const [commentData, setCommentData] = useState([])
    const [userInfo, setUserInfo] = useState(ctx.userInfo);
    useEffect(() => {
        const temp = props.courseQuestions.map(question => {
            return {
                userId: question.user,
                comId: question.comId,
                fullName: question.user.firstName + " " + question.user.lastName,
                // userProfile: "",
                text: question.text,
                avatarUrl: `https://ui-avatars.com/api/name=${question.user.firstName}&background=random`,
                replies: question.replies,
            }
        })
        setCommentData(temp);
        setUserInfo(ctx.userInfo)

    },[props.courseQuestions, ctx])

    const handleAskQuestion = (inputdata) => {
        const { userId, comId, avatarUrl, fullName, text } = inputdata;
        // console.log(userId, comId, avatarUrl, fullName, text);
        const token = localStorage.getItem('token')
        let config = {
            headers: {
                'authorization': 'Bearer ' + token,
            }
        }
        const bodyParameters = {
            // key: "value"
            text,
            course: props.courseName.toLowerCase(),
        };
        const baseUrl = process.env.REACT_APP_ROOT_API;
        axios.post(`${baseUrl}/question`, bodyParameters, config).then(res => {

            const { data } = res;
            const { status } = data;
            if (status === 200)
            {
                // console.log(data)
                // setCommentData(prev => {
                //     let returnedQuestion = data.data;
                //     console.log(data);
                //     console.log(returnedQuestion);
                //     prev.push({
                //         userId: returnedQuestion.user,
                //         comId: returnedQuestion.comId,
                //         fullName: returnedQuestion.user.firstName + " " + returnedQuestion.user.lastName,
                //         // userProfile: "",
                //         text: returnedQuestion.text,
                //         avatarUrl: `https://ui-avatars.com/api/name=${returnedQuestion.user.firstName}&background=random`,
                //         replies: returnedQuestion.replies,
                //     });
                //     return prev;
                // })
                // console.log(commentData);
                // ctx.onLogin(data.data.user)
                // console.log(data.data.userInfo);
                // toast.success(data.success);
                props.onUpdateCourseQuestions();
            }
        }).catch(err => {
            // toast.success(err.message);
            console.log(err)
        })
    }

    const handleReplyQuestion = (inputdata) => {
        const { userId, repliedToCommentId, text, avatarUrl, fullName} = inputdata;
        const token = localStorage.getItem('token')
        let config = {
            headers: {
                'authorization': 'Bearer ' + token,
            }
        }
        const bodyParameters = {
            // key: "value"
            text,
            user: userId,
            question: repliedToCommentId,
            avatarUrl,
            fullName
        };
        const baseUrl = process.env.REACT_APP_ROOT_API;
        axios.post(`${baseUrl}/answer`, bodyParameters, config).then(res => {

            const { data } = res;
            const { status } = data;
            if (status === 200)
            {
                // ctx.onLogin(data.data.user)
                // console.log(data.data.userInfo);
                // toast.success(data.success);
            }
        }).catch(err => {
            // toast.success(err.message);
            console.log(err)
        })
    }

    // const [commentSection, setCommentSection] = useState(<></>);


    if (userInfo)
    { 
        return <>
            <h1 hidden>{ctx.userInfo.firstName}</h1>
            <p hidden>{commentData && commentData.length > 0 && commentData[0].id}</p>
            <CommentSection
                currentUser={ctx.userInfo && {
                    currentUserId: ctx.userInfo._id,
                    currentUserImg:
                        `https://ui-avatars.com/api/name=${ctx.userInfo.firstName}&background=random`,
                    // currentUserProfile:
                    //     'https://www.linkedin.com/in/riya-negi-8879631a9/',
                    currentUserFullName: ctx.userInfo.firstName + " " + ctx.userInfo.lastName
                }}
                logIn={{
                    loginLink: `/login`,
                    signupLink: 'http://localhost:3001/'
                }}
                commentData={commentData}
                onSubmitAction={(data: {
                    userId: string,
                    comId: string,
                    avatarUrl: string,
                    // userProfile?: string,
                    fullName: string,
                    text: string,
                    replies: any,
                    commentId: string,
                }) => {
                    console.log('check submit, ', data)
                    handleAskQuestion(data);
                }}
                onReplyAction={(data) => {
                    handleReplyQuestion(data);
                }}
                currentData={(data: any) => {
                    console.log('curent data', data)
                }}
            />
        </>;
    } else
    {
        return <CommentSection
            currentUser={null}
            logIn={{
                loginLink: `/login`,
                signupLink: 'http://localhost:3001/'
            }}
            commentData={commentData}
            onSubmitAction={(data: {
                userId: string,
                comId: string,
                avatarUrl: string,
                // userProfile?: string,
                fullName: string,
                text: string,
                replies: any,
                commentId: string,
            }) => {
                console.log('check submit, ', data)
                handleAskQuestion(data)
            }}
            onReplyAction={(data) => {
                console.log("REPLY!")
                console.log(data)

            }}
            currentData={(data: any) => {
                console.log('curent data', data)
            }}
        />;
    }
    
}

export default Question;