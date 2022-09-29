import { Button, Input } from "antd";
import { useFormik } from "formik";
import React from "react";
import { useState } from "react";
import styles from "./style.module.css";
import * as yup from "yup";
import instance from "api/instance";
import { useHistory } from "react-router-dom";
import Header from "common/components/Header";

const schema = yup.object({
  taiKhoan: yup.string().required("*Trường này bắt buộc nhập"),
  matKhau: yup
    .string()
    .required("*Trường này bắt buộc nhập")
    .min(8, "*Mật khẩu phải từ 8 tới 16 kí tự"),
  hoTen: yup
    .string()
    .required("*Trường này bắt buộc nhập")
    .matches(/^[A-Za-z ]+$/, "*Họ tên không đúng định dạng"),
  email: yup
    .string()
    .required("*Trường này bắt buộc nhập")
    .email("*Email không đúng định dang"),
});

function Signup() {
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      taiKhoan: "",
      matKhau: "",
      hoTen: "",
      email: "",
      soDt: "",
    },
    onSubmit: (values) => {
      const newUser = { ...values, maNhom: "GP02" };
      signUp(newUser);
    },
    validationSchema: schema,
  });

  const signUp = async (user) => {
    try {
      setIsLoading(true);
      const res = await instance.request({
        url: "/api/QuanLyNguoiDung/DangKy",
        method: "POST",
        data: user,
      });
      console.log(res.data);
      history.push("/signin");
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <Header />
      <h2 className={styles.title}>Sign up</h2>
      <form onSubmit={formik.handleSubmit} className={styles.form}>
        <Input
          name="taiKhoan"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className={styles.input}
          type="text"
          placeholder="Username"
        />
        {formik.touched.taiKhoan && formik.errors.taiKhoan && (
          <p className={styles.errorText}>{formik.errors.taiKhoan}</p>
        )}

        <Input
          name="hoTen"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className={styles.input}
          type="text"
          placeholder="FullName"
        />
        {formik.touched.hoTen && formik.errors.hoTen && (
          <p className={styles.errorText}>{formik.errors.hoTen}</p>
        )}

        <Input
          name="matKhau"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className={styles.input}
          type="password"
          placeholder="Password"
        />
        {formik.touched.matKhau && formik.errors.matKhau && (
          <p className={styles.errorText}>{formik.errors.matKhau}</p>
        )}

        <Input
          name="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className={styles.input}
          type="text"
          placeholder="Email"
        />
        {formik.touched.email && formik.errors.email && (
          <p className={styles.errorText}>{formik.errors.email}</p>
        )}

        <Input
          name="soDt"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className={styles.input}
          type="text"
          placeholder="Phone number"
        />
        {formik.touched.soDt && formik.errors.soDt && (
          <p className={styles.errorText}>{formik.errors.soDt}</p>
        )}

        <Button type="primary" htmlType="submit" loading={isLoading}>
          Submit
        </Button>
      </form>
    </div>
  );
}

export default Signup;
