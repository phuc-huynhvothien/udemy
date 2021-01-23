import React from 'react';
import PropTypes from 'prop-types';
import InputField from '../../../../components/form-control/InputField'
import { useForm } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object().shape({
  title: yup.string().required(),
});
TodoForm.propTypes = {
    onSubmit: PropTypes.func,
};

function TodoForm(props) {
    const form = useForm({
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
    );
}

export default TodoForm;