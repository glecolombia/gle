import { Car, Box, World, Cart, CourierIcon } from "@icons/index";

interface ServiceIcon {
  iconId: number;
  iconComponent: React.ReactNode;
  iconComponentService: React.ReactNode;
  iconSrc?: string;
}

export const iconsServices: ServiceIcon[] = [
  {
    iconId: 1,
    iconComponent: <Box />,
    iconComponentService: <Box width="75" height="75" />,
    iconSrc: "/assets/images/home/services/icons/paqueteo.svg",
  },
  {
    iconId: 2,
    iconComponent: <Car />,
    iconComponentService: <Car width="75" height="75" />,
    iconSrc: "/assets/images/home/services/icons/carga-masiva.svg",
  },
  {
    iconId: 3,
    iconComponent: <World />,
    iconComponentService: <World width="75" height="75" />,
  },
  {
    iconId: 4,
    iconComponent: <Cart />,
    iconComponentService: <Cart width="75" height="75" />,
    iconSrc: "/assets/images/home/services/icons/ecommerce.svg",
  },
  {
    iconId: 5,
    iconComponent: <CourierIcon />,
    iconComponentService: <CourierIcon />,
    iconSrc: "/assets/images/home/services/icons/mensajeria-expresa.svg",
  },
];
