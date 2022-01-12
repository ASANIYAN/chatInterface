const Heading = () => {

    const body = document.body;
    const lightTheme = "light";
    const darkTheme = "dark";
    //let theme;

    /*if (localStorage) {
        theme = localStorage.getItem("theme");
    }

    if (theme === lightTheme || theme === darkTheme) {
        body.classList.add(theme);
    } else {
        body.classList.add(lightTheme);
    }*/

    const switchTheme = (e) => {
        console.log(body.className);
        //let check = document.getElementById('check');
        if (body.className === lightTheme) {
            body.classList.replace(lightTheme, darkTheme);
        }else {
            body.classList.replace(darkTheme, lightTheme);
        }
    }

    return (
        <section className="mt-5" id="heading">
            <div className="container">
                <div className="row">
                    <div className="col-8">
                    <h1 className="scouting">Scouting Group</h1>
                    </div>
                    <div className="col-4">
                        <label className="switch">
                            <input type="checkbox" id="check"/>
                            <span onClick={(e) => { switchTheme(e) }} className="slider round"></span>
                        </label>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Heading;