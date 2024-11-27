import { sendMail } from "@/api/send-mail";
import * as S from "./styles";
import C from "@/constants";
import { validations } from "./validations";
import { SendMailRequest } from "@/api/send-mail/request";
import { useFormik } from "formik";
import { useState } from "react";

export default () => {
  const { contact } = C;
  const [isModalOpen, setIsModalOpen] = useState({
    isActive: false,
    send: true,
    title: <>Nachricht gesendet</>,
    text: (
      <>
        Ihre Nachricht wurde erfolgreich gesendet. Unser Team <br /> wird Ihnen in Kürze per E-Mail
        antworten.
      </>
    ),
  });
  const [loading, setLoading] = useState(false);

  const closeModal = (send?: boolean) => {
    setIsModalOpen({
      ...isModalOpen,
      isActive: false,
      send: send ?? true,
    });
  };

  const openModal = (send: boolean) => {
    setIsModalOpen({
      ...isModalOpen,
      isActive: true,
      send,
      title: send ? (
        <>Nachricht gesendet</>
      ) : (
        <>
          Füllen Sie alle Felder <br />
          korrekt aus
        </>
      ),
    });
  };

  const formik = useFormik<SendMailRequest>({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
    validationSchema: validations,
    onSubmit: async (values) => {
      setLoading(true);
      try {
        await sendMail(values);
        openModal(true);
        setLoading(false);

        setTimeout(() => {
          closeModal(true);
        }, 4000);

        formik.resetForm();
      } catch (error) {
        openModal(false);
        setLoading(false);

        setTimeout(() => {
          closeModal(false);
        }, 4000);
      }
    },
  });

  return (
    <>
      <S.Modal $active={isModalOpen.isActive} $error={isModalOpen.send}>
        <S.ModalContent>
          <S.WrapperModal>
            <S.IconModal />
            <S.TitleModal>{isModalOpen.title}</S.TitleModal>
            <S.TextModal>{isModalOpen.text}</S.TextModal>
            <S.ButtonModal onClick={() => closeModal()}>OK</S.ButtonModal>
          </S.WrapperModal>
        </S.ModalContent>
        <S.Blackout onClick={() => closeModal()} />
      </S.Modal>

      <S.Contact id="kontakt">
        <S.Wrapper>
          <S.Title>{contact.title}</S.Title>
          <S.Subtitle>{contact.subtitle}</S.Subtitle>
          <S.Container>
            <S.Form onSubmit={formik.handleSubmit}>
              {contact.form.inputs.map((input, index) => (
                <S.Label
                  key={index}
                  $gridName={input.name}
                  $error={Boolean(
                    formik.touched[input.name as keyof SendMailRequest] &&
                      formik.errors[input.name as keyof SendMailRequest],
                  )}
                >
                  <S.TextInput>{input.label}</S.TextInput>
                  {input.type === "textarea" ? (
                    <S.TextArea
                      {...formik.getFieldProps(input.name)}
                      placeholder={input.placeholder}
                      name={input.name}
                    />
                  ) : (
                    <S.Input
                      {...formik.getFieldProps(input.name)}
                      type={input.type}
                      name={input.name}
                      placeholder={input.placeholder}
                    />
                  )}
                </S.Label>
              ))}
              <S.Button type="submit">
                {contact.form.button} {loading && "..."}
              </S.Button>
            </S.Form>

            <S.Content>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2700.1867543573576!2d8.393163377079297!3d47.40829837117224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47900daf92c6674b%3A0x1b76fee6765a93e4!2sBleicherstrasse%2039%2C%208953%20Dietikon%2C%20Switzerland!5e0!3m2!1sen!2sbr!4v1732665502896!5m2!1sen!2sbr"
                width="600"
                height="450"
                style={{ borderRadius: "4px", border: "0.4rem solid white" }}
                loading="lazy"
                allowFullScreen={true}
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </S.Content>
          </S.Container>
        </S.Wrapper>
      </S.Contact>
    </>
  );
};
