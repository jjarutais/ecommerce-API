import { ChangeEvent, useState } from "react"

export function UserSignupPage() {
    const [form, setForm] = useState({
        displayName: '',
        username: '',
        password: '',
    })

    const onChange = (event: ChangeEvent<HTMLInputElement>) =>{
        const {value, name} = event.target;
        setForm((previousForm) => {
            return{
                ...previousForm,
                [name]: value,
            }
        })
    }





    return (
        <>
        <div className="container">
            <h1 className="text-center">Sign Up - {form.displayName}</h1>
            <div className="col-12 mb-3">
                <label htmlFor="displayname">Informe seu nome:</label>
                <input type="text"
                       id="name"
                       name="displayName"
                       placeholder="Informe seu nome"
                       className="form-control"
                       onChange={onChange}/>
            </div>
            <div className="col-12 mb-3">
                <label htmlFor="displayname">Informe seu usuário:</label>
                <input type="text"
                       id="username"
                       name="username"
                       placeholder="Informe seu usuário"
                       className="form-control"/>
            </div>
            <div className="col-12 mb-3">
                <label htmlFor="displayname">Informe sua senha:</label>
                <input type="password"
                       id="password"
                       name="password"
                       placeholder="*********"
                       className="form-control"/>
            </div>
            <div>
                <button className="btn btn-primary">Cadastrar</button>
            </div>
        </div>
        </>
    )
}