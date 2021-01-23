import React from 'react';
import PropTypes from 'prop-types';
<<<<<<< HEAD
import InputField from '../../../../components/form-control/InputField'
import { useForm } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object().shape({
  title: yup.string().required(),
});
TodoForm.propTypes = {
    onSubmit: PropTypes.func,
=======
import InputField from '../../../../components/form-controls';
import {useForm} from 'react-hook-form'
TodoForm.propTypes = {
    onSubmit : PropTypes.func,
>>>>>>> bce71e70d2cb673ec339b570dd63d38fe7dfeb6e
};

function TodoForm(props) {
    const form = useForm({
<<<<<<< HEAD
        defaultValues: {
            title: '',
        },
        resolver : yupResolver(schema),
    });
    const handleSubmit = (values) => {
        const {onSubmit} = props;
        if(onSubmit){
            onSubmit(values)
        }
    }
    return (
        <form onSubmit = {form.handleSubmit(handleSubmit)}>
            <InputField name="title" label="TODO" form={form} />
            <button type="submit">SUbbmit</button>
        </form>
=======
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
>>>>>>> bce71e70d2cb673ec339b570dd63d38fe7dfeb6e
    );
}

export default TodoForm;