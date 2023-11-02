import React from 'react';
import { Formik, Field, Form } from 'formik';
import InputFields from './InputField';
import axios from 'axios';
import { PayLoadBody } from './PayLoadBody';

type GeneralMapProps = {
    

 
const Generalmap: React.FC<GeneralMapProps> = ({ value }) => {
    const inputFields: {
      text: InputFields,
        file: InputFields
    };
    const initialValues: { [key: string]: string } = {};
    value?.forEach(childData => {
        Object?.values(childData)?.forEach(section => {
            section?.forEach(self => {
                self.child?.forEach(values => {
                    initialValues[values.name] = ''; // Set initial value for each field
                });
            });
        });
    });

    const handleSubmit = async (values: any) => {
        let PageName = value?.[0].Section1?.[0].Page;

        let body = PayLoadBody?.[PageName];

        body.meta_data = values;
        console.log(body, 'values');
        try {
            const response = await axios.post(
                'https://webwila.com/giftopedia/public/api/v1/udpatePage',
                body, 
                {
                    headers: {
                        Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiN2RhNDIyYTEyNDg3MmJiYjhhYTc1NTM1NDUxNWIzNWI4NDc1ZGFkNWI5MTg2YTg1YWNmZDRjZWVhOTVlYjUxMzZjOThiNWE1NTg2MzdiZWMiLCJpYXQiOjE2OTg4MjQ1MDkuNDczNzk4LCJuYmYiOjE2OTg4MjQ1MDkuNDczOCwiZXhwIjoxNzMwNDQ2OTA5LjQ2ODQyMywic3ViIjoiMSIsInNjb3BlcyI6W119.YYzPQJUPzDcUux1j_Itcx7j8-1fz_jk-S4VSpbe2ysvKk0NOE-iTAomMjoGsUJmIXeZg-AMn2OH1JoomoLf8oLSusOqytNg7QPACF7BqE7Mwj5Bikd_Jk3HQ6oA4PQdxVu42y-o5-5trPb3mCarv4iYnYFZ6Pr0UcTqW915WchpRqPkzzQMBSzCv74MLnIBU3X-qCNzW1jbxatGtFXXrjjZfi_Huf4eHyXSr4KUEYZQQYcJ5fA9YEGVq8weGzaQBXHs7ITC8RN5QLs-P6Eu-3DcbblyQsMMSflpxFy7fEupc6Qjsv0WkmeYY8r0Z3zSdUMCiwfRxP2hS3fdb5KiFXyjYPHcUvz3gpXJyXBoKlGN19kri1L3W_BPPy1CY55zWmrF1JOrUTZJLikpv141ySD8EeSdo4e2MwEmlGgA7EUulDj2HnNGUcuqIcKZj5zyp5BqoV1AnFx8mJXM79cI7eFv-6rlKyHyxwNT_lzPhsnmFn9ACVbaExAlLMQFZ58kFLJaFhqtgS3tJBtuIO5gRP8eV1IIJ3MV-YKDG7Muj87Hmz1hRvacU6SRVbKHhLMiO7iYwZw_l03bRcoZrzEZ3HLjt6GH46YayX7n-fRPJqPObM32gR1w6n89Ii_QrvLga_eX0Z_yXE1UAo0zJty7fWVezunrxdiYxkgx4I4sYQU0`
                    }
                }
            );

            console.log('Response:', response);
        } catch (error) {
            console.error('Error:', error);
        }
    };
    return (
        <div>
            <Formik initialValues={initialValues} onSubmit={handleSubmit}>
                {({ handleChange }) => (
                    <Form>
                        {value?.map(childData => {
                            return Object?.values(childData)?.map(section => {
                                return section?.map((self, index) => (
                                    <div key={index} className="container-fluid mt-4">
                                        <div className="card">
                                            <div className="card-body">
                                                <div key={index} className="row justify-content-center">
                                                    <h1 className="col-md-3 d-flex justify-content-center ">{self.Heading}</h1>
                                                    <div key={index} className={self.Parent}>
                                                        {self.child?.map((values, index) => {
                                                            const FieldComponent = inputFields[values.type];
                                                            return (
                                                                <div className={values.className} key={index}>
                                                                    {values.type == 'Area' ? (
                                                                        <textarea
                                                                            placeholder={values.name}
                                                                            className="form-control"
                                                                            id={values.name}
                                                                            name={values.name}
                                                                            rows={3}
                                                                            onChange={handleChange}
                                                                        ></textarea>
                                                                    ) : (
                                                                        <Field
                                                                            as={FieldComponent}
                                                                            type={[{ FieldType: values.type, Name: values.name, handleChange: handleChange }]}
                                                                        />
                                                                    )}
                                                                </div>
                                                            );
                                                        })}
                                                    </div>
                                                    <div className={self?.btnContainer}>
                                                        <button type="submit" className={self?.btnClass} style={self?.Btnstyle}>
                                                            {self?.btnContent}
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ));
                            });
                        })}
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default Generalmap;