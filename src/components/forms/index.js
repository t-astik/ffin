import { Formik } from 'formik';
import styles from './index.module.css';

export const Forms = ({ onClose, onItemAdd }) => {
    const numberWithSpaces = (x) => {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }
        
    return (
        <div className={styles.container}>
                <Formik
                    initialValues={{ title: '', price: '', date: '' }}
                    validate={values => {
                        const errors = {};
                        if (!values.title) {
                        errors.title = 'Required';
                        } else if (!values.price) {
                            errors.price = 'Required'
                        } else if (!/(?<!-)\d+/g.test(values.price)) {
                            errors.price = 'Invalide price'
                        } else if (!values.date) {
                            errors.date = 'Required'
                        }
                        return errors;
                    }}
                    onSubmit={(values, { setSubmitting }) => {
                        onItemAdd(values)
                        setSubmitting(false)
                    }}
                >
                    {({
                        values,
                        errors,
                        touched,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        isSubmitting,
                    }) => (
                        <form onSubmit={handleSubmit}>
                            <div className={styles.formItem}>
                                <span>Title</span>
                                <input
                                    type="title"
                                    name="title"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.title}
                                />
                                {errors.title && touched.title && errors.title}
                            </div>
                            <div className={styles.formItem}>
                                <span>Price</span>
                                <input
                                    type="price"
                                    name="price"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={numberWithSpaces(values.price)}
                                />
                                {errors.price && touched.price && errors.price}
                            </div>
                            <div className={styles.formItem}>
                                <span>Date and time</span>
                                <input
                                    type="date"
                                    name="date"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.date}
                                />
                                {errors.date && touched.date && errors.date}
                            </div>
                            <div className={styles.modalFooter}>
                                <div className={styles.line}></div>
                                <div className={styles.btnsBlock}>
                                    <button className={styles.closeBtnBottom} onClick={() => onClose(false)}>Close</button>
                                    <button className={styles.addBtn} type="submit" onSubmit={handleSubmit} onClick={() => onClose(false)} disable={errors}>Add</button>
                                </div>
                            </div> 
                        </form>
                    )}
                </Formik>
            
           
        </div>
    )
}