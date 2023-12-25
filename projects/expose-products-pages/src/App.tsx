import React from "react";
import "./App.scss"

export interface FollowsProps {
    userName        : string;
    name            : string;
    isFollowing     : boolean;
    imgSource       : string;
    formatUserName  : (name : string) => string;
}

export const App : React.FC<FollowsProps> = ({formatUserName, userName, name, isFollowing, imgSource}) => {
    return (
        <article className={"tw-followCard"}>
            <header className={"tw-followCard-header"}>
                <img
                    src={imgSource}
                    alt="Avatar of Picture"
                    className={"tw-followCard-avatar"}
                />
                <div className={"tw-followCard-info"}>
                    <strong> {name} </strong>
                    <span>{formatUserName(userName)}</span>
                </div>
            </header>

            <aside className={"tw-followCard-actions"}>
                <button>
                    {isFollowing ? 'Siguiendo' : 'Seguir'}
                </button>
            </aside>
        </article>
    )
}