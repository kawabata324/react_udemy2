import {ChildArea} from "./ChildArea";
import {useState, useCallback, useMemo} from "react";

export const App = () => {

    const [text, setText] = useState('')
    const [open, setOpen] = useState(false)
    const [count, setCount] = useState(0)

    const onChangeText = (event) => setText(event.target.value)

    const onClickOpen = () => setOpen(!open)

    const onClickCountUp = () => setCount(count + 1)

    const onClickClose = useCallback(
        () => setOpen(false),
        [setOpen])

    // const temp = useMemo(() => 1 + 3,[])

    return (
        <>
            <input type="text" value={text} onChange={onChangeText}/>
            <br/>
            <br/>
            <button onClick={onClickOpen}>表示</button>
            <ChildArea open={open} onClickClose={onClickClose}/>
            <button onClick={onClickCountUp}>カウントアップ</button>
            <p>{count}</p>
        </>
    )
}