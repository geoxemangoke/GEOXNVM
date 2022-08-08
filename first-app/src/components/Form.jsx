import TextField from '@material-ui/core/TextField';

export const FormComponent = () => {

    return (
        <form noValidate autoComplete="off">
            <div>
                <TextField id="username" label="Username" />
            </div>
            <div>
                <TextField id="pass" label="Password" type={'password'}/>
            </div>
            <div>
                
            </div>
            
            <TextField id="outlined-basic" label="Email" type={'email'}/>
        </form>
    )
}