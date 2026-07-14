export const getComments = () => {
    const stored = localStorage.getItem("canComments");
    return stored ? JSON.parse(stored) : {};
};

export const addComment = (canId, comment) => {
    const allComments = getComments();
    if (!allComments[canId]) {
        allComments[canId] = [];
    }
    allComments[canId].push(comment);
    localStorage.setItem("canComments", JSON.stringify(allComments));
};