import React from 'react'

export default function PageHero({pageTitle, pageDescription}){
    return (
        <div className="w-full h-80 bg-primary relative">
            <div className="hero-content absolute top-1/2 pl-16 w-3/4">
                <h1 className="text-white text-2xl font-bold">{pageTitle}</h1>
                <p className="text-white">{pageDescription}</p>
            </div>
        </div>
    )
}