const FormInputTask = ({ setTask }) => {
    const storeTask = (task) => {
        setTask(task);
    }
    return ( 
        <form onSubmit={ (e) => { e.preventDefault(); storeTask(e.target.children[0].value) }}>
            <input type="text"></input>
        </form>
    );
}
 
export default FormInputTask;