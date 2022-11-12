import classes from './formControl.module.css'

export const Textarea = ({input, meta, ...props}) => {
    const hasError = meta.error && meta.touched;
    return (
        <div className={classes.formControl }>
            <textarea className = {hasError ? classes.error: ""}{...input} {...props}/>
            <div>
                {hasError && <span className = {classes.errorText}>{meta.error}</span>}
            </div>
        </div>)
}

export const Input = ({input, meta, ...props}) => {
    const hasError = meta.error && meta.touched;
    return (
        <div className={classes.formControl }>
            <input className = {hasError ? classes.error: ""}{...input} {...props}/>
            <div>
                {hasError && <span className = {classes.errorText}>{meta.error}</span>}
            </div>
        </div>)
}
