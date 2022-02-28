import "./init-page.scss";


export default function InitPage(props) {
    console.log(props);
    return (
        <div className="container">
            <a href="/#" value={1} onClick={props.clickBtn} >
                <div className="box">
                    <span></span>
                    <div className="content">
                        <h2>ADD RECIPE</h2>
                        <img src="\add.jpg" alt="Girl in a jacket" />
                    </div>
                </div>
            </a>
            <a href="/#" value={2} onClick={props.clickBtn} >
                <div className="box">
                    <span></span>
                    <div className="content">
                        <h2>VIEW RECIPES</h2>
                        <img src="\view.jpg" alt="Girl in a jacket" />
                    </div>
                </div>
            </a>
        </div>
    );
}
