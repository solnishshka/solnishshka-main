import cn from 'classnames';

export default function Social(props) {
  return (
    <div className={cn('social', `social_type_${props.type}`)}>
      <a className="social__link" href="#" target="_blank">
        <i className={cn('fa', 'fa-telegram', {'fa-lg': props.type === "lead"})}></i>
      </a>
      <a className="social__link" href="#" target="_blank">
        <i className={cn('fa', 'fa-whatsapp', {'fa-lg': props.type === "lead"})}></i>
      </a>
      <a className="social__link" href="#" target="_blank">
        <i className={cn('fa', 'fa-github', {'fa-lg': props.type === "lead"})}></i>
      </a>
      <a className="social__link" href="#" target="_blank">
        <i className={cn('fa', 'fa-facebook', {'fa-lg': props.type === "lead"})}></i>
      </a>
      <a className="social__link" href="#" target="_blank">
        <i className={cn('fa', 'fa-skype', {'fa-lg': props.type === "lead"})}></i>
      </a>
      <a className="social__link" href="#" target="_blank">
        <i className={cn('fa', 'fa-vk', {'fa-lg': props.type === "lead"})}></i>
      </a>
    </div>
  )
}
