import React from 'react'
import { CommentSection } from 'react-comments-section'
import "./Comment.css";
import 'react-comments-section/dist/index.css'

const Comment = () => {
    const data = [
        {
            userId: '02b',
            comId: '017',
            fullName: 'Lily',
            userProfile: 'https://www.linkedin.com/in/riya-negi-8879631a9/',
            text: 'I think you have a point🤔',
            avatarUrl: 'https://ui-avatars.com/api/name=Lily&background=random',
            replies: []
        }
    ]
    return <CommentSection
        currentUser={{
            currentUserId: '01a',
            currentUserImg:
                'https://ui-avatars.com/api/name=Riya&background=random',
            currentUserProfile:
                'https://www.linkedin.com/in/riya-negi-8879631a9/',
            currentUserFullName: 'Riya Negi'
        }}
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

export default Comment