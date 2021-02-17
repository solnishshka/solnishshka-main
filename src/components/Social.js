import React from 'react'
import cn from 'classnames'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 240px;
  ${(props) => props.type === 'footer' && 'min-width: 240px;'}

  @media screen and (max-width: 1024px) {
    ${(props) => props.type === 'footer' && 'min-width: 200px;'}
  }
  @media screen and (max-width: 768px) {
    ${(props) => props.type === 'lead' && 'margin: 0 auto;'}
    ${(props) => props.type === 'footer' && 'min-width: 140px;'}
  }
`

const Link = styled.a`
  text-decoration: none;
  color: ${(props) => props.theme.colors.textColorLight};
  transition: color 1s linear, transform 1s linear;

  &:hover {
    color: ${(props) => props.theme.colors.yellow};
    transform: scale(1.2);
  }
`

export default function Social(props) {
  return (
    <Container type={props.type}>
      <Link
        href="mailto:testsolnishshka@yandex.ru"
        target="_blank"
        rel="noreferrer"
      >
        <i
          className={cn('fa', 'fa-envelope', {
            'fa-lg': props.type === 'lead',
          })}
        />
      </Link>
      <Link href="https://t.me/solnishshka" target="_blank" rel="noreferrer">
        <i
          className={cn('fa', 'fa-telegram', {
            'fa-lg': props.type === 'lead',
          })}
        />
      </Link>
      <Link href="https://wa.me/79166952756" target="_blank" rel="noreferrer">
        <i
          className={cn('fa', 'fa-whatsapp', {
            'fa-lg': props.type === 'lead',
          })}
        />
      </Link>
      <Link
        className="social__link"
        href="https://github.com/solnishshka?tab=repositories"
        target="_blank"
        rel="noreferrer"
      >
        <i
          className={cn('fa', 'fa-github', { 'fa-lg': props.type === 'lead' })}
        />
      </Link>
      <Link
        href="https://www.facebook.com/anastasiya.stratilatova"
        target="_blank"
        rel="noreferrer"
      >
        <i
          className={cn('fa', 'fa-facebook', {
            'fa-lg': props.type === 'lead',
          })}
        />
      </Link>
      <Link href="https://vk.com/anti_tella" target="_blank" rel="noreferrer">
        <i
          className={cn('fa', 'fa-vk', { 'fa-lg': props.type === 'lead' })}
        />
      </Link>
    </Container>
  )
}
