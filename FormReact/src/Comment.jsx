function Comments({array}) {
    return <div>
        {array.length>0 && <h1>All Comments</h1>}
        {array.map((item) => {
            return <h1>{item.remark}</h1>
        })
        }
    </div>
}
export default Comments