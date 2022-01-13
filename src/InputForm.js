const InputForm = () => {
    return (
        <form id="inputForm" className="mt-5" action="">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="input-group mb-3">
                            <input type="text" className="form-control msgInput"
                            placeholder="Write a message..." aria-label="Example text with button addon" aria-describedby="button-addon1" />
                        </div>
                    </div>
                </div>
            </div>
        </form>
     );
}

export default InputForm;