import React, {FC} from 'react';

const Post: FC<{login?: string, post: string;}> = ({login, post}) => {
    return (
        <div>
            <div className="out-text">{post}</div>
        </div>
    );
};

export default Post