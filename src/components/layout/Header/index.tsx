import { useRouter } from 'next/router'
import style from './index.module.scss'
import { motion } from 'framer-motion'
import ZennIcon from '../../../../public/zenn.svg'
import GitHubIcon from '../../../../public/github.svg'
import TwitterIcon from '../../../../public/twitter.svg'
import { useState } from 'react'
import Link from 'next/link'
import { HamburgerIcon } from '@chakra-ui/icons'
// import Modal from '@/components/parts/Modal'

export default function Header(): JSX.Element {
  const router = useRouter()

  const [isSelectHeader, setIsSelectHeader] = useState<boolean>(false)
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const headerTitle = ['Home', 'About', 'Projects', 'Article']

  const handleClick = (): void => {
    setIsModalOpen(!isModalOpen)
  }

  const hanldePath = (headerName: string[]): JSX.Element => {
    const hanlde = (title: string): void => {
      if (title === router.asPath) {
        setIsSelectHeader(!isSelectHeader)
      }
      setIsSelectHeader(false)
    }

    return (
      <ul className={style.left_content}>
        {headerName.map((title) => (
          <li onClick={() => hanlde(title)} className={`${style.menu_item_md} ${isSelectHeader ? style.selected : style.select}`}>
            {title}
          </li>
        ))}
        <HamburgerIcon w={10} h={10} className={style.menu_item_sm} onClick={handleClick} />
      </ul>
    )
  }

  return (
    <>
      <div className={style.container}>
        {hanldePath(headerTitle)}

        <div className={style.center_container}>
          <motion.button
            whileHover={{
              backgroundColor: ['#121212', '#1900ff', 'rgba(253,29,29,1)', 'rgba(252,176,69,1)', 'rgba(131,58,180,1)', '#121212'],
            }}
            className={style.center_btn}
          >
            KUMA
          </motion.button>
        </div>

        <div className={style.right_content}>
          <Link href="/" className={style.external_link}>
            <ZennIcon width={30} height={30} className={style.icon} />
          </Link>
          <Link href="/" className={style.external_link}>
            <GitHubIcon width={30} height={30} className={style.icon} />
          </Link>
          <Link href="/" className={style.external_link}>
            <TwitterIcon width={30} height={30} className={style.icon} />
          </Link>
        </div>
      </div>
      {/* <Modal open={isModalOpen} onClose={handleClick}/> */}
    </>
  )
}
