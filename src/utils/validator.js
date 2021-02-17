export const validators = {
    name: {
      required: (value, isSubmit) => {
        return isSubmit && value === ''
      },
      minLength: (value, isSubmit) => {
        return isSubmit && value.length < 3
      },
      containSymbols: (value, isSubmit) => {
        return isSubmit && !/^[_a-zёЁа-яА-Я'][_a-zёЁа-яА-Я-' ]+[_a-zёЁа-яА-Я']?$/gi.test(
          value
        )
      },
    },
    email: {
      required: (value, isSubmit) => {
        return isSubmit && value === ''
      },
      invalidEmail: (value, isSubmit) => {
        return isSubmit && !/[\w]+@[a-z.]+/gi.test(value)
      },
    },
    message: {
      required: (value, isSubmit) => {
        return isSubmit && value === ''
      },
      minLength: (value, isSubmit) => {
        return isSubmit && value.length < 30
      },
    },
  }
  