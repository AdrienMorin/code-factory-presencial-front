import React from 'react'

const SubTitle = ({title, className}: { title: string, className?: string }) => {
    return (
        <h1 className={`text-slate-900 text-xl mb-4 font-bold ${className}`}>{title}</h1>
    )
}

const TextPrincipal = ({text}: { text: string }) => {
    return (
        <p className='text-slate-900 font-medium text-sm'>{text}</p>
    )
}

const TextSecondary = ({text}: { text: string }) => {
    return (
        <p className='text-slate-500 font-normal text-sm'>{text}</p>
    )
}

const TextSidebar = ({text}: { text: string }) => {
    return (
        <p className='text-slate-700 font-bold text-sm'>{text}</p>
    )
}

const InputText = ({text}: { text: string }) => {
    return (
        <p className='text-slate-900 font-medium text-base'>{text}</p>
    )
}


export { SubTitle, TextPrincipal, TextSecondary, TextSidebar, InputText }