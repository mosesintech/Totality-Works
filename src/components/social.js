import React from 'react';

const SocialShare = (props) => {
    return (
        <>
        <hr />
        <div>
            <h5 style={{display: "inline"}}>SHARE:</h5>
            &nbsp;
            &nbsp;
            &nbsp;
            <a href={`https://twitter.com/intent/tweet/?text=${props.title}&url=https://totalityworks.com/articles/${props.slug}%2F&via=totalityworks`} target="_blank" rel="noreferrer noopener">
                <span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="icon icon-twitter"
                    >
                        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                    </svg>
                </span> 
            </a>
            &nbsp;
            &nbsp;
            <a href={`https://www.facebook.com/sharer/sharer.php?u=https://totalityworks.com/articles/${props.slug}`} target="_blank" rel="noreferrer noopener">
                <span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="icon icon-facebook"
                    >
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                    </svg>
                </span> 
            </a>
            &nbsp;
            &nbsp;
            <a href={`https://www.linkedin.com/shareArticle?mini=true&url=https://totalityworks.com/${props.slug}&title=${props.title}&source=${props.title}`} target="_blank" rel="noreferrer noopener">
                <span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="icon icon-linkedin"
                    >
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                        <rect x="2" y="9" width="4" height="12" />
                        <circle cx="4" cy="4" r="2" />
                    </svg>
                </span> 
            </a>
        </div>
        <hr />
        </>
    )
}

export default SocialShare