import React, { useState } from 'react'
import { CommentSection } from 'react-comments-section'
import "./Question.css";
import 'react-comments-section/dist/index.css'

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
    const data = props.courseQuestions.map(question => {
        return {
            userId: question.user,
            comId: question.comId,
            fullName: question.user.firstName + " " + question.user.lastName,
            userProfile: "",
            text: question.text,
            avatarUrl: `https://ui-avatars.com/api/name=${question.user.firstName}&background=random`,
            replies: question.replies,
        }
    })
    console.log(data);
    return <CommentSection
        currentUser={null ? {
            currentUserId: '01a',
            currentUserImg:
                'https://ui-avatars.com/api/name=Riya&background=random',
            currentUserProfile:
                'https://www.linkedin.com/in/riya-negi-8879631a9/',
            currentUserFullName: 'Riya Negi'
        } : null}
        logIn={{
            loginLink: 'http://localhost:3001/',
            signupLink: 'http://localhost:3001/'
        }}
        commentData={data}
        onSubmitAction={(data: {
            userId: string,
            comId: string,
            avatarUrl: string,
            userProfile?: string,
            fullName: string,
            text: string,
            replies: any,
            commentId: string,
        }) => console.log('check submit, ', data)}
        onReplyAction={(data) => {
            console.log("REPLY!")
            console.log(data)

        }}
        currentData={(data: any) => {
            console.log('curent data', data)
        }}
    />
}

export default Question;