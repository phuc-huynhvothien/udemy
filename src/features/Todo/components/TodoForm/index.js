import React from 'react';
import PropTypes from 'prop-types';
import InputField from '../../../../components/form-controls';
import {useForm} from 'react-hook-form'
TodoForm.propTypes = {
    onSubmit : PropTypes.func,
};

function TodoForm(props) {
    const form = useForm({
        defaultValues:{
            title  :'',
        }
    });

    const handleSubmitX = (valuesX) =>{
        console.log("vvv",valuesX)
    }
    return (
        <form  onSubmit={form.handleSubmit(handleSubmitX)}>
            todo Form
            <InputField name="title" label="Todo" form={form} />
        </form >
    );
}

export default TodoForm;