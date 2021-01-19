import cn from 'classnames'

export default function Social(props) {
  return (
    <div className={cn('social', `social_type_${props.type}`)}>
      <a
        className="social__link"
        href="https://t.me/solnishshka"
        target="_blank"
        rel="noreferrer"
      >
        <i
          className={cn('fa', 'fa-telegram', {
            'fa-lg': props.type === 'lead',
          })}
        ></i>
      </a>
      <a
        className="social__link"
        href="https://wa.me/79166952756"
        target="_blank"
        rel="noreferrer"
      >
        <i
          className={cn('fa', 'fa-whatsapp', {
            'fa-lg': props.type === 'lead',
          })}
        ></i>
      </a>
      <a
        className="social__link"
        href="https://github.com/solnishshka?tab=repositories"
        target="_blank"
        rel="noreferrer"
      >
        <i
          className={cn('fa', 'fa-github', { 'fa-lg': props.type === 'lead' })}
        ></i>
      </a>
      <a
        className="social__link"
        href="https://www.facebook.com/anastasiya.stratilatova"
        target="_blank"
        rel="noreferrer"
      >
        <i
          className={cn('fa', 'fa-facebook', {
            'fa-lg': props.type === 'lead',
          })}
        ></i>
      </a>
      <a
        className="social__link"
        href="https://vk.com/anti_tella"
        target="_blank"
        rel="noreferrer"
      >
        <i
          className={cn('fa', 'fa-vk', { 'fa-lg': props.type === 'lead' })}
        ></i>
      </a>
    </div>
  )
}
