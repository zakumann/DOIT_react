export default function VariousInputs(){
    return (
        <div>
            <p>VariousInputs</p>
            <div>
                <input type="text" placeholder="enter some texts" />
                <input type="text" placeholder="enter your password" />
                <input type="range" />
                <input type="button" value="I'm a button" />
                <input type="checkbox" value="I'm a checkbox" defaultChecked />
                <input type="radio" value="I'm a radio" defaultChecked/>
                <input type="file" />
            </div>
        </div>
    )
}