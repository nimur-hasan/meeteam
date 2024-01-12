"use client";

import PrimaryButton from "@/theme/buttons/PrimaryButton";
import SecondaryButton from "@/theme/buttons/SecondaryButton";
import Input from "@/theme/inputs/Input";
import { Formik, useFormik } from "formik";
import Image from "next/image";
import Link from "next/link";
import * as Yup from 'yup'

export default function Home() {

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("El correo electrónico debe ser un correo electrónico válido.")
      .required("Se requiere correo."),
    password: Yup.string().required("Se requiere contraseña."),
  });


  return (
    <main className="grid min-h-screen w-screen grid-cols-2">
      <div className="col-span-1">
        <div className="h-full px-16">
          <div className="flex h-full flex-col justify-between">
            {/* Logo */}
            <div className="py-[18px]">
              <img src="/assets/logo.svg" />
            </div>

            <Formik
              initialValues={{
                email: "",
                password: "",
              }}
              validationSchema={validationSchema}
              onSubmit={(values) => {
                // same shape as initial values
                console.log(values);
                alert(JSON.stringify(values));
              }}
            >
              {({ errors, values, handleSubmit, handleChange }) => (
                <form onSubmit={handleSubmit} className="px-14">
                  <h2 className="text-Azul-1 text-center font-[Unbounded] text-5xl font-bold">
                    Iniciar Sesión
                  </h2>
                  <p className="text-Negro mt-6 text-lg">
                    Conecta tu talento con el mundo
                  </p>

                  <div className="mt-8 flex flex-col gap-6">
                    <Input
                      id="email"
                      name="email"
                      label="Correo"
                      onChange={handleChange}
                      value={values.email}
                      error={errors.email}
                      required
                    />
                    <Input
                      id="password"
                      name="password"
                      label="Contraseña"
                      labelRight={
                        <Link className="underline" href="#">
                          Olvidaste tu contraseña?
                        </Link>
                      }
                      onChange={handleChange}
                      value={values.password}
                      error={errors.password}
                      required
                    />
                    <div className="flex flex-col gap-4">
                      <PrimaryButton type="submit" fullWidth>
                        Iniciar Sesión
                      </PrimaryButton>
                      <SecondaryButton
                        leftIconPath="/assets/icons/google.svg"
                        fullWidth
                      >
                        Iniciar con Google
                      </SecondaryButton>
                    </div>
                    <div className="flex justify-center">
                      <div className="flex items-center gap-1.5">
                        <div>No tienes una cuenta?</div>
                        <Link href="#">Regístrate</Link>
                      </div>
                    </div>
                  </div>
                </form>
              )}
            </Formik>
            {/* Copyright mark */}
            <div className="py-[1.625rem]">© 2024 Meeteam</div>
          </div>
        </div>
      </div>

      {/* Placeholder Image */}
      <div className="relative col-span-1 ">
        <Image
          layout="fill"
          objectFit="cover"
          src="/assets/images/placeholder-image.png"
          alt="Image"
        />
      </div>
    </main>
  );
}
