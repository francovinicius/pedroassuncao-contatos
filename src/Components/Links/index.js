import styles from './Links.css'

export default function Links() {
    return (
        <section className="d-flex flex-column justfy-content-center align-items-center link-container">
            <a href="https://api.whatsapp.com/send/?phone=5524993032860&text&type=phone_number&app_absent=0" target='blank' className="nav-link btn btn-lg btn-link">Consultas</a>
            <a href="https://api.whatsapp.com/send/?phone=5524999271694&text&type=phone_number&app_absent=0" target='blank' className="nav-link btn btn-lg btn-link">Cursos</a>
            <a href="https://www.youtube.com/channel/UC55SlFhCiJqoDcea2Gqke6g" target='blank' className="nav-link btn btn-lg btn-link">Youtube</a>
            <a href="https://www.instagram.com/phassuncao/?hl=pt-br" target='blank' className="nav-link btn btn-lg btn-link">Instagram</a>
        </section>
    )
}