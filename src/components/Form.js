import styled from 'styled-components'
import { Button } from './Button'
import { useContext, useState, useCallback, useEffect } from 'react'
import { TranslationContext } from '../contexts/translationContext'
import api from '../utils/api'
import validators from '../utils/validators'

const FormElement = styled.form`
  max-width: 670px;
  margin: 0 auto;

  @media screen and (max-width: 1279px) {
    max-width: 540px;
  }

  @media screen and (max-width: 1023px) {
    max-width: 450px;
  }

  @media screen and (max-width: 490px) {
    max-width: 250px;
  }
`

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  min-height: 100px;

  @media screen and (max-width: 490px) {
    flex-direction: column;
    margin: 0 auto;
  }
`

const StatusContainer = styled(Container)`
  flex-direction: column;
`

const Fieldset = styled.fieldset`
  display: flex;
  flex-direction: column;
  width: 40%;
  border: none;
  padding: 0;

  @media screen and (max-width: 490px) {
    width: 100%;
  }
`

const FieldsetTypeTA = styled(Fieldset)`
  width: 45%;
  max-height: 160px;

  @media screen and (max-width: 490px) {
    width: 100%;
  }
`

const Input = styled.input`
  font-size: 14px;
  width: 100%;
  opacity: 0.8;
  margin-bottom: 10px;
  height: 40px;
  border: 0;
  border-bottom: 1px solid ${(props) => props.theme.colors.lineColor};
  background-color: ${(props) => props.theme.colors.formColor};
  color: ${(props) => props.theme.colors.textColorDark};
  transition: opacity 0.5s linear;
  outline: 2px solid
    ${(props) => props.isSubmitted && (props.invalid ? 'red;' : 'green;')}
    @media screen and (max-width: 1024px) {
    height: 40px;
  }
  @media screen and (max-width: 768px) {
    height: 30px;
  }

  &:focus {
    ${(props) => !props.isSubmitted && 'outline: none;'}
    opacity: 1;
  }

  &:last-of-type {
    margin-top: 20px;
  }
`

const TextArea = styled.textarea`
  opacity: 0.8;
  max-width: 350px;
  width: 100%;
  height: 100%;
  border: 1px solid ${(props) => props.theme.colors.lineColor};
  border-radius: 5px;
  background-color: ${(props) => props.theme.colors.formColor};
  color: ${(props) => props.theme.colors.textColorDark};
  transition: opacity 0.5s linear;
  resize: none;
  margin-bottom: 7px;
  outline: 2px solid ${(props) =>
    props.isSubmitted && (props.invalid ? 'red;' : 'green;')}

  &:focus {
    ${(props) => !props.isSubmitted && 'outline: none;'}
    opacity: 1;
  }

  @media screen and (max-width: 1024px) {
    height: 40px;
    max-height: 140px;
    min-height: 140px;
  }

  @media screen and (max-width: 768px) {
    max-height: 120px;
    min-height: 120px;
  }

  @media screen and (max-width: 490px) {
    margin-top: 20px;
  }
`

const ButtonElement = styled(Button)`
  background-color: ${(props) => props.theme.colors.yellow};
  color: ${(props) => props.theme.colors.buttonTextColor};
  height: 40px;
  width: 120px;
  margin-top: 50px;

  &:disabled {
    transform: none;
    cursor: default;
    background-color: rgba(248, 187, 16, 0.4);
    color: ${(props) => props.theme.colors.buttonTextColor};
  }

  @media screen and (max-width: 490px) {
    margin-top: 35px;
  }
`

const SuccesMessage = styled.h2`
  margin: auto;
  font-size: 22px;
  font-weight: 300;

  @media screen and (max-width: 490px) {
    max-width: 280px;
    font-size: 18px;
    text-align: center;
  }
`

const Spinner = styled.i`
  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  color: ${(props) => props.theme.colors.yellow};
  animation: rotate linear 2s infinite;
  margin: auto;
`

const Span = styled.span`
  color: #ff0000;
  font-size: 12px;
  line-height: 1.21;
  margin-bottom: 5px;
  opacity: ${(props) => (!props.isValid ? '1;' : '0;')} @media screen and
    (max-width: 490px) {
    margin-bottom: 10px;
  }
`

const ReturnButton = styled(Button)`
  max-width: 100px;
  margin: 40px auto;
  cursor: pointer;
  background-color: #f8bb10;
  padding: 7px 10px;
`

export default function Form(props) {
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [isSubmit, setIsSubmit] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSending, setIsSending] = useState(false)
  const [isValidationStart, setIsValidationStart] = useState({
    name: false,
    email: false,
    message: false,
  })
  const [isError, setIsError] = useState(false)

  const translation = useContext(TranslationContext)

  const handleChangeInput = useCallback(
    (evt) => {
      const { name, value } = evt.target
      setFormValues((prevState) => ({ ...prevState, [name]: value }))
      setIsValidationStart((prevState) => ({ ...prevState, [name]: true }))
    },
    [setFormValues, setIsValidationStart]
  )
  const [errors, setErrors] = useState({
    name: {
      required: true,
      minLength: true,
      containSymbols: true,
    },
    email: {
      required: true,
      invalidEmail: true,
    },
    message: {
      required: true,
      minLength: true,
    },
  })

  useEffect(() => {
    const { name, email, message } = formValues

    const nameIsValid = Object.keys(validators.name)
      .map((errorKey) => {
        const errorResult = validators.name[errorKey](
          name,
          isValidationStart.name
        )

        return { [errorKey]: errorResult }
      })
      .reduce((acc, el) => ({ ...acc, ...el }), {})

    const emailIsValid = Object.keys(validators.email)
      .map((errorKey) => {
        const errorResult = validators.email[errorKey](
          email,
          isValidationStart.email
        )

        return { [errorKey]: errorResult }
      })
      .reduce((acc, el) => ({ ...acc, ...el }), {})

    const messageIsValid = Object.keys(validators.message)
      .map((errorKey) => {
        const errorResult = validators.message[errorKey](
          message,
          isValidationStart.message
        )

        return { [errorKey]: errorResult }
      })
      .reduce((acc, el) => ({ ...acc, ...el }), {})

    setErrors({
      name: nameIsValid,
      email: emailIsValid,
      message: messageIsValid,
    })
  }, [formValues, setErrors, isValidationStart])

  const { name, email, message } = formValues

  const nameInvalid = Object.values(errors.name).some(Boolean)
  const emailInvalid = Object.values(errors.email).some(Boolean)
  const messageInvalid = Object.values(errors.message).some(Boolean)

  const isValidationAllInputs = Object.values(isValidationStart).every(Boolean)

  const isFormValid =
    !(nameInvalid || emailInvalid || messageInvalid) && isValidationAllInputs

  function handleSubmit(evt) {
    evt.preventDefault()
    const letter = `Имя: ${name} Email: ${email} Сообщение: ${message}`
    setIsSending(true)
    api
      .sendMail(letter)
      .then((res) => {
        setIsSubmit(true)
        setIsSending(false)
      })
      .catch((err) => {
        console.log(err)
        setIsError(true)
        setIsSending(false)
      })
  }

  function handleReturn() {
    setIsSubmit(false)
    setIsError(false)
    setFormValues({
      name: '',
      email: '',
      message: '',
    })
    setIsValidationStart({ name: false, email: false, message: false })
  }

  if (isSending) {
    return (
      <Container>
        <Spinner className="fa fa-sun-o fa-4x" aria-hidden="true" />
      </Container>
    )
  } else if (isSubmit) {
    return (
      <StatusContainer>
        <SuccesMessage>Сообщение успешно отправлено!</SuccesMessage>
        <ReturnButton onClick={handleReturn}>Закрыть</ReturnButton>
      </StatusContainer>
    )
  } else if (isError) {
    return (
      <StatusContainer>
        <SuccesMessage>Что-то пошло не так. Попробуйте ещё раз!</SuccesMessage>
        <ReturnButton onClick={handleReturn}>Закрыть</ReturnButton>
      </StatusContainer>
    )
  } else {
    return (
      <FormElement
        name="contact-me"
        onSubmit={handleSubmit}
        onChange={() => setIsSubmitted(true)}
        noValidate
      >
        <Container>
          <Fieldset>
            <Input
              onChange={handleChangeInput}
              value={name}
              name="name"
              type="text"
              placeholder={translation.form.name}
              invalid={nameInvalid}
              isSubmitted={isSubmitted}
            ></Input>
            {errors.name.required && (
              <Span>Поле обязательно для заполнения</Span>
            )}
            {errors.name.minLength && (
              <Span>Длина сообщения должна быть более 2 символов</Span>
            )}
            {errors.name.containSymbols && (
              <Span>
                Имя должно содержать только буквы русского или английского
                алфавита
              </Span>
            )}
            <Input
              onChange={handleChangeInput}
              value={email}
              name="email"
              type="email"
              placeholder="Email"
              invalid={emailInvalid}
              isSubmitted={isSubmitted}
            ></Input>
            {errors.email.required && (
              <Span>Поле обязательно для заполнения</Span>
            )}
            {errors.email.invalidEmail && (
              <Span>Некорректный адрес электронной почты</Span>
            )}
          </Fieldset>
          <FieldsetTypeTA>
            <TextArea
              onChange={handleChangeInput}
              value={message}
              name="message"
              type="text"
              placeholder={translation.form.message}
              invalid={messageInvalid}
              isSubmitted={isSubmitted}
            ></TextArea>
            {errors.message.required && (
              <Span>Поле обязательно для заполнения</Span>
            )}
            {errors.message.minLength && (
              <Span>Длина сообщения должна быть более 30 символов</Span>
            )}
          </FieldsetTypeTA>
        </Container>
        <ButtonElement disabled={!isFormValid} type="submit">
          {translation.form.submitButton}
        </ButtonElement>
      </FormElement>
    )
  }
}
