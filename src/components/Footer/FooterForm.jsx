import Form, {
  FormButton,
  FormThemeProvider,
  Input,
  TextArea,
} from "react-form-component";

export const FooterForm = () => {
  return (
    <FormThemeProvider
      theme={{
        textLabels: {
          mandatoryField: "Поле обязательно для заполнения.",
          formInvalid: "Форма заполнена некорректно.",
          emailInvalid: "Введите коректный email.",
          phoneInvalid: 'Введите корректный номер телефона.',
        },
      }}
    >
      <Form
        fields={["firstName", "lastName", "email", "phone", "message"]}
        mandatory={["firstName", "lastName", "email", "phone"]}
        className="formInner"
      >
        <div className="inputWrapper">
          <Input className="formInput" name="firstName" placeholder="Ваше имя*" />
          <Input className="formInput" name="lastName" placeholder="Ваша фамилия*" />
        </div>
        <div className="inputWrapper">
          <Input className="formInput" name="email" type="email" placeholder="Email*" />
          <Input className="formInput" name="phone" type="phone" placeholder="Ваш телефон*" />
        </div>
        <TextArea className="textArea" name="message" placeholder="Введите текст" />
        <FormButton onClick={() => console.log("Click on send!")}>
          Отправить
        </FormButton>
      </Form>
    </FormThemeProvider>
  );
};
