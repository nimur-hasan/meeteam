"use client";

import PrimaryButton from "@/theme/buttons/PrimaryButton";
import SecondaryButton from "@/theme/buttons/SecondaryButton";
import Input from "@/theme/inputs/Input";
import { Formik, useFormik } from "formik";
import Image from "next/image";
import Link from "next/link";
import * as Yup from "yup";

export default function Home() {
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("El correo electrónico debe ser un correo electrónico válido.")
      .required("Se requiere correo."),
    password: Yup.string().required("Se requiere contraseña."),
  });

  return (
    <main className="flex min-h-screen w-screen grid-cols-2 flex-col md:grid">
      <div className="col-span-1">
        <div className="h-full md:px-14">
          <div className="flex h-full flex-col justify-between">
            {/* Logo */}
            <div className="flex justify-center py-[14px] md:py-[18px] md:block">
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
                <form onSubmit={handleSubmit} className="px-4 md:px-16 ">
                  <h2 className="text-Azul-1 text-center font-[Unbounded] text-4xl font-bold md:text-5xl">
                    Iniciar Sesión
                  </h2>
                  <p className="text-Azul-1 md:text-Negro mt-5 md:mt-6 md:text-lg">
                    Conecta tu talento con el mundo
                  </p>

                  <div className="mt-6 md:mt-8 flex flex-col gap-6">
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
                      <div className="text-Azul-1 flex items-center gap-1.5">
                        <div>No tienes una cuenta?</div>
                        <Link href="#">Regístrate</Link>
                      </div>
                    </div>
                  </div>
                </form>
              )}
            </Formik>
            {/* Copyright mark */}
            <div className="text-Azul-1 hidden px-4 py-[1.625rem] md:block md:px-0">
              © 2024 Meeteam
            </div>
          </div>
        </div>
      </div>

      {/* Placeholder Image */}
      <div className="md:auto relative col-span-1 mt-16  h-[400px] md:h-full md:mt-0">
        <Image
          layout="fill"
          objectFit="cover"
          src="/assets/images/placeholder-image.png"
          alt="Image"
        />
        <div className="text-Blanco absolute bottom-0 left-0 right-0 block px-4 py-[1.625rem] text-center md:hidden md:px-0">
          © 2024 Meeteam
        </div>
      </div>
    </main>
  );
}
