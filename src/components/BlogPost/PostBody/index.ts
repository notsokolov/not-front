import {markdownToHtml} from "../../../lib/markdownToHtml"

function PostBody(content : string) {
    return markdownToHtml(content);
}

export default PostBody
