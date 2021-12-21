import {
  HStack,
  Menu,
  MenuButton,
  MenuGroup,
  MenuItem,
  MenuList,
  Spacer
} from '@chakra-ui/react'
import { useRecoilValue } from 'recoil'

import { UserAvatar } from '@/components/model/user'
import { LoginButton, ProductLogo } from '@/components/shared'
import { isLoginAtom, userAtom } from '@/recoil/atom'
import { useAuth } from '@/utils/hooks'

const Header = () => {
  const { logout } = useAuth()
  const user = useRecoilValue(userAtom)
  const isLogin = useRecoilValue(isLoginAtom)

  return (
    <HStack
      px={[5, 10]}
      py={2}
      borderRadius={'full'}
      bgColor={'white'}
      border={'2px'}
      borderColor={'brown.500'}
      boxShadow={'md'}
    >
      <ProductLogo />
      <Spacer />
      {isLogin ? (
        <>
          <Menu>
            <MenuButton _hover={{ opacity: 0.9 }}>
              <UserAvatar name={user.name} src={user.image ?? undefined} />
            </MenuButton>
            <MenuList>
              <MenuGroup title={user.name}>
                <MenuItem onClick={logout}>Logout</MenuItem>
              </MenuGroup>
            </MenuList>
          </Menu>
        </>
      ) : (
        <LoginButton />
      )}
    </HStack>
  )
}

export { Header }
