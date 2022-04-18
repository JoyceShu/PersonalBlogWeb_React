import "./write.css";

export default function Write() {
  return (
    <div className="write"> 
    <img className="writeImg" src="https://scontent-sjc3-1.xx.fbcdn.net/v/t39.30808-6/278669847_116081007730780_4740120965104321467_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=pXztAk0FIt0AX-fWI5l&_nc_ht=scontent-sjc3-1.xx&oh=00_AT9AGSz8OcS1FyhMJZdnrrbs6WutzMraohOmrdx0_B-VpA&oe=62610E70" alt="" />
        <form className="writeForm">
            <div className="writeFormGroup">
                <label htmlFor="fileInput">
                <i className="writeIcon fas fa-plus"></i>
                </label>
                <input type="file" id="fileInput" style={{display:"none"}}/>
                <input type="text" placeholder="Title" className="writeInput" autoFocus={true}/>
            </div>
            <div className="writeFormGroup">
                <textarea placeholder="Share your story..." type="text" className="writeInput writeText"></textarea>
            </div>
            <button className="writeSubmit">Publish</button>
        </form>
    </div>
  )
}
