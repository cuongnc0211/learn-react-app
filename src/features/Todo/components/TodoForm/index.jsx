import PropTypes from 'prop-types';
import React from 'react';
import { useForm } from "react-hook-form";
import InputField from '../../../../components/form-controls/inputField';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";


TodoForm.propTypes = {
  onSubmit: PropTypes.func,
};

function TodoForm(props) {
  const schema = yup.object().shape({
    title: yup.string()
      .required('Please enter title')
      .min(3, 'Title too short'),
  });

  const form = useForm({
    defaultValues: {
      title: '',
    },
    resolver: yupResolver(schema),
  });

  const handleSubmit = (value) => {
    console.log(value);
  }

  return (
    <form onSubmit={form.handleSubmit(handleSubmit)}>
      <InputField name="title" label="Todo" form={form} />
    </form>
  );
}

export default TodoForm;