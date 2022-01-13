const InputForm = () => {
    return (
        <form id="inputForm" className="mt-5" action="">
            <div className="container">
                <div className="row">
                    <div className="col-11">
                        <div className="input-group input-hold mb-3">
                            <input type="text" className="form-control msgInput"
                            placeholder="Write a message..." aria-label="Example text with button addon" aria-describedby="button-addon1" />
                        </div>
                    </div>
                    <div className="col-1">
                        <button className="btn">
                            <i className="fas fa-paper-plane share"></i>
                        </button>
                    </div>
                </div>
            </div>
        </form>
     );
}

export default InputForm;