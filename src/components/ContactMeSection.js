import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { FormControl, FormLabel, Input, Textarea, Button, FormErrorMessage, Select, extendTheme, ChakraProvider } from '@chakra-ui/react';


const theme = extendTheme({
  components: {
    FormControl: {
      baseStyle: {
        borderColor: 'red',
        _focus: {
          borderColor: 'red', 
          boxShadow: '0 0 0 1px red',
        },
        _invalid: {
          borderColor: 'red',
        },
      },
    },
  },
});

const ContactMeSection = () => {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      email: '',
      type: '',
      comment: '',
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
      type: Yup.string().required('Required'),
      comment: Yup.string()
        .required('Required')
        .max(25, 'Must be 25 characters or less'),
    }),
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      resetForm();
    },
  });

  return (
    <ChakraProvider theme={theme}>
      <section id="contact">
        <h2>Contact Me</h2>
        <p>
          Get in touch with me for any project that you would like to discuss
          with me? I would love to help make it happen! Drop me a letter and
          start your project right now! Just do it.
        </p>
        <form onSubmit={formik.handleSubmit}>
          <FormControl
            id="firstName"
            isInvalid={formik.touched.firstName && formik.errors.firstName}
          >
            <FormLabel>Your Name</FormLabel>
            <Input
              type="text"
              {...formik.getFieldProps('firstName')}
              placeholder="Your Name"
            />
            <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage>
          </FormControl>
          <FormControl
            id="email"
            mt={4}
            isInvalid={formik.touched.email && formik.errors.email}
          >
            <FormLabel>Your Email</FormLabel>
            <Input
              type="email"
              {...formik.getFieldProps('email')}
              placeholder="Your Email"
            />
            <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
          </FormControl>
          <FormControl
            id="type"
            mt={4}
            isInvalid={formik.touched.type && formik.errors.type}
          >
            <FormLabel>Type of Enquiry</FormLabel>
            <Select
              placeholder="Select type of enquiry"
              {...formik.getFieldProps('type')}
            >
              <option value="Freelance project proposal">
                Freelance project proposal
              </option>
              <option value="Freelance project proposal">
                Freelance project proposal
              </option>
            </Select>
            <FormErrorMessage>{formik.errors.type}</FormErrorMessage>
          </FormControl>
          <FormControl
            id="comment"
            mt={4}
            isInvalid={formik.touched.comment && formik.errors.comment}
          >
            <FormLabel>Your Message (max 25 characters)</FormLabel>
            <Textarea
              {...formik.getFieldProps('comment')}
              placeholder="Your Message"
            />
            <FormErrorMessage>{formik.errors.comment}</FormErrorMessage>
          </FormControl>
          <Button
            mt={4}
            colorScheme="teal"
            isLoading={formik.isSubmitting}
            type="submit"
          >
            Send Message
          </Button>
        </form>
      </section>
    </ChakraProvider>
  );
};

export default ContactMeSection;
