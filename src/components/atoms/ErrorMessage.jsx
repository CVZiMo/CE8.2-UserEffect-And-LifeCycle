import './ErrorMessage.css'

export default function ErrorMessage({ message }) {
    return <p className="error" role="alert">Something went wrong: {message}</p>
}