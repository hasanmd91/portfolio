import { Link, Stack, Box, Text } from '@chakra-ui/react';

type MenuItemProps = {
  isOpen: boolean;
};

const Menuitems = [
  { name: 'Home', to: '/home' },
  { name: 'About', to: '/about' },
  { name: 'Skills', to: '/skills' },
  { name: 'Projects', to: '/projects' },
  { name: 'Contact', to: '/contact' },
];

const MenuItem = ({ isOpen }: MenuItemProps) => {
  return (
    <Box
      display={{ base: isOpen ? 'block' : 'none', md: 'block' }}
      flexBasis={{ base: '100%', md: 'auto' }}
    >
      <Stack
        spacing={8}
        align="center"
        justify={['center', 'space-between', 'flex-end', 'flex-end']}
        direction={['column', 'row', 'row', 'row']}
        pt={[4, 4, 0, 0]}
      >
        {Menuitems.map((item) => (
          <Link key={item.name} href={item.to}>
            <Text fontWeight="semibold" fontSize="">
              {item.name}
            </Text>
          </Link>
        ))}
      </Stack>
    </Box>
  );
};

export default MenuItem;
