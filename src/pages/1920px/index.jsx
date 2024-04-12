
  import React from "react";
import { Helmet } from 'react-helmet';
  import { Text, Img, Button, TextArea, Input } from "../../components"

  
  
  
  
  
  export default function 1920pxPage(){

    

    

    return (
      <>
        <Helmet>
          <title>Sarthak's Application1</title>
          <meta name="description" content="Web site created using create-react-app" />
        </Helmet> 
        <div className="w-full bg-gray-900">
<div>
<div className="h-[1080px] bg-[url(/public/images/img_group_6.png)] bg-cover bg-no-repeat md:h-auto">
<div className="flex h-[1080px] items-center justify-center bg-[url(/public/images/img_group_7.png)] bg-cover bg-no-repeat p-5 md:h-auto">
<div className="mb-2.5 flex w-[32%] flex-col items-center md:w-full">
<div className="flex w-[51%] justify-between gap-5 rounded-[16px] border border-solid border-gray-600_26 bg-gray-600_4c p-[13px] md:w-full">
<div className="ml-3 flex md:ml-0">
<Text as="p">
Обо мне</Text>
</div>
<div className="flex">
<Text as="p">
Навыки</Text>
</div>
<div className="mr-[11px] flex md:mr-0">
<Text as="p">
Мои работы</Text>
</div>
</div>
<Text size="5xl" as="p" className="mt-[371px] text-center">
Евгений Быстров</Text>
<Text size="4xl" as="p" className="text-center !font-thin">
Креативный Frontend Разработчик</Text>
<Button shape="round" className="mt-[25px] min-w-[112px] font-light">
Связаться</Button>
<Text size="xs" as="p" className="mt-[339px]">
Листай ниже, чтобы узнать больше обо мне</Text>
<Text size="s" as="p" className="mt-3.5 flex h-[30px] w-[30px] items-center justify-center rounded-[15px] border border-solid border-gray-600_26 bg-gray-600_4c text-center">
↓</Text>
</div>
</div>
</div>
<div className="flex bg-gradient px-[340px] md:px-5">
<div className="mx-auto flex w-full max-w-[1240px] flex-col items-center justify-center gap-[17px] py-14 md:py-5">
<div className="flex w-[13%] items-center gap-2 md:w-full">
<div className="h-px w-[20px] flex-1 bg-white-A700" />
<Text size="3xl" as="p" className="text-center">
Обо мне</Text>
<div className="h-px w-[20px] flex-1 bg-white-A700" />
</div>
<div className="mb-[3px] flex gap-4 self-stretch md:flex-col">
<Img src="images/img_me_jpg.png" alt="mejpg_one" className="h-[533px] w-[33%] rounded-[16px] object-cover md:w-full" />
<div className="flex flex-1 flex-col items-start gap-3.5 rounded-[16px] border border-solid border-gray-600_26 bg-gray-600_4c p-[25px] md:self-stretch sm:p-5">
<Text size="xl" as="p">
Возраст:</Text>
<Text as="p">
22 года</Text>
<Text size="xl" as="p">
Живу в:</Text>
<Text as="p">
Томск, Россия</Text>
<Text size="xl" as="p">
Образование:</Text>
<Text as="p">
Томский Политехнический Университет</Text>
<Text size="xl" as="p">
Описание:</Text>
<Text as="p">
Привет! Очень рад, что Вы зашли на мою личную страничку :3 Я живу и работаю в Томске.</Text>
<Text as="p" className="mb-[35px] w-[97%] leading-8 md:w-full">
<>Фронтенд-разработка - это то, что действительно завладело моим сердцем. Я убежден, что<br />креативность, сочетаемая с техническими навыками, способна создавать удивительные вещи. Моя<br />цель - помогать в создании превосходных пользовательских интерфейсов и эффективных веб-<br />проектов. Давайте вместе превратим вашу идею в реальность!</></Text>
</div>
</div>
</div>
</div>
<div className="flex h-[300px] items-end justify-center bg-[url(/public/images/img_div_parallax.png)] bg-cover bg-no-repeat px-14 py-[123px] md:h-auto md:p-5">
<Text size="4xl" as="p" className="mt-2">
Программирование - мое творчество, ваше решение</Text>
</div>
<div className="flex bg-gradient px-[340px] md:px-5">
<div className="mx-auto flex w-full max-w-[1240px] flex-col items-center justify-center gap-[17px] py-[57px] md:py-5">
<div className="flex w-[12%] items-center gap-2 md:w-full">
<div className="h-px w-[20px] flex-1 bg-white-A700" />
<Text size="3xl" as="p" className="text-center">
Навыки</Text>
<div className="h-px w-[20px] flex-1 bg-white-A700" />
</div>
<div className="mb-0.5 flex gap-4 self-stretch md:flex-col">
<div className="flex w-full flex-col items-center gap-[15px] rounded-[16px] border border-solid border-gray-600_26 bg-gray-600_4c p-6 sm:p-5">
<div className="flex">
<Text size="lg" as="p" className="text-center">
Могу предложить и сэкономить Ваше время</Text>
</div>
<div className="flex flex-col gap-[25px] self-stretch">
<div className="flex items-center gap-6 self-start sm:flex-col">
<Img src="images/img_calendar.svg" alt="calendar_one" className="h-[48px] w-[48px] sm:w-full" />
<Text as="p" className="mb-2.5 self-end">
Верстка адаптивных сайтов-лендингов с макета</Text>
</div>
<div className="flex items-center gap-6 self-start sm:flex-col">
<Img src="images/img_television.svg" alt="television_one" className="h-[48px] w-[48px] sm:w-full" />
<Text as="p" className="mb-2.5 self-end">
Добавление правок на уже готовый сайт</Text>
</div>
<div className="flex items-center gap-6 pr-14 md:pr-5 sm:flex-col">
<Img src="images/img_react_svg.svg" alt="reactsvg_one" className="h-[48px] w-[48px] sm:w-full" />
<Text as="p" className="mb-2.5 self-end">
Разработка пользовательских интерфейсов на React/Vue</Text>
</div>
<div className="flex gap-6 sm:flex-col">
<Img src="images/img_stack_svg.svg" alt="stacksvg_one" className="h-[48px] w-[48px] sm:w-full" />
<div className="flex flex-1 sm:self-stretch">
<Text as="p" className="w-[88%] leading-6">
<>Разработка комплексного приложения для вашей задачи<br />(Fullstack)</></Text>
</div>
</div>
<div className="flex items-center gap-6 self-start sm:flex-col">
<Img src="images/img_speed_svg.svg" alt="speedsvg_one" className="h-[48px] w-[48px] sm:w-full" />
<Text as="p" className="mb-2.5 self-end">
Оптимизация производительности веб-приложений</Text>
</div>
</div>
</div>
<div className="flex w-full flex-col items-center gap-[15px] rounded-[16px] border border-solid border-gray-600_26 bg-gray-600_4c p-6 sm:p-5">
<div className="flex">
<Text size="lg" as="p" className="text-center">
Технологии, которые я использую</Text>
</div>
<div className="flex flex-col gap-5 self-stretch">
<div className="relative h-[40px] rounded-[16px] border border-solid border-gray-600_26 bg-gray-600_4c md:h-auto">
<div className="h-[38px] w-full rounded-[16px] bg-black-900_01" />
<div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max w-[96%] flex-wrap justify-between gap-5">
<Text as="p">
HTML</Text>
<Text as="p">
100%</Text>
</div>
</div>
<div className="flex items-center justify-center gap-2.5 rounded-[16px] border border-solid border-gray-600_26 bg-gray-600_4c sm:flex-col">
<Input shape="round" name="css" placeholder={`CSS`} className="flex-grow font-light sm:p-5 sm:pr-5" />
<Text as="p" className="sm:p-5">
90%</Text>
</div>
<div className="flex items-center justify-between gap-5 rounded-[16px] border border-solid border-gray-600_26 bg-gray-600_4c sm:flex-col">
<Input shape="round" name="javascriptes6" placeholder={`JavaScript (ES6)`} className="w-[82%] font-light sm:w-full sm:p-5 sm:pr-5" />
<Text as="p" className="mr-[11px] sm:mr-0 sm:p-5">
80%</Text>
</div>
<div className="flex items-center justify-between gap-5 rounded-[16px] border border-solid border-gray-600_26 bg-gray-600_4c sm:flex-col">
<Input shape="round" name="reactjs_redux" placeholder={`React.js + Redux`} className="w-[77%] font-light sm:w-full sm:p-5 sm:pr-5" />
<Text as="p" className="mr-[11px] sm:mr-0 sm:p-5">
75%</Text>
</div>
<div className="flex items-center justify-between gap-5 rounded-[16px] border border-solid border-gray-600_26 bg-gray-600_4c">
<Input shape="round" name="groupfour" placeholder={`Node.js, Express.js, MongoDB`} className="w-[61%] font-light sm:pr-5" />
<Text as="p" className="mr-[11px]">
60%</Text>
</div>
<div className="flex items-center justify-between gap-5 rounded-[16px] border border-solid border-gray-600_26 bg-gray-600_4c">
<Input shape="round" name="weburl" placeholder={`Vue.js`} className="w-[51%] font-light sm:pr-5" />
<Text as="p" className="mr-[11px]">
50%</Text>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="flex h-[300px] items-end justify-center bg-[url(/public/images/img_div_parallax.png)] bg-cover bg-no-repeat px-14 py-[123px] md:h-auto md:p-5">
<Text size="4xl" as="p" className="mt-2">
От идеи к коду: воплощаем ваши мечты в веб-реальность</Text>
</div>
<div className="flex bg-gradient px-[340px] md:px-5">
<div className="mx-auto flex w-full max-w-[1240px] flex-col items-center gap-[15px] py-[59px] md:py-5">
<div className="flex w-[17%] items-start gap-2 md:w-full">
<div className="mt-[15px] h-px w-[20px] flex-1 bg-white-A700" />
<Text size="3xl" as="p" className="text-center">
Мои работы</Text>
<div className="mt-[15px] h-px w-[20px] flex-1 bg-white-A700" />
</div>
<div className="flex flex-col items-center gap-8 self-stretch">
<div className="flex flex-col items-center gap-12 self-stretch px-[13px] pb-[13px]">
<div className="flex w-[92%] flex-col gap-6 rounded-[16px] border border-solid border-gray-600_26 bg-gray-600_4c p-[25px] md:w-full sm:p-5">
<div className="flex flex-col items-center gap-1">
<Text size="2xl" as="p" className="text-center !text-gray-300">
Верстка лэндинг-сайта</Text>
<Text as="p" className="text-center !text-gray-300">
Адаптивный лэндинг-сайт</Text>
</div>
<Img src="images/img_appson_png.png" alt="appsonpng_one" className="h-[490px] object-cover" />
<div className="flex gap-[23px] self-end">
<Button shape="round" className="min-w-[144px] font-light">
Ссылка на код</Button>
<Button shape="round" className="min-w-[157px] font-light">
Перейти на сайт</Button>
</div>
</div>
<div className="flex h-[8px] w-[56px] justify-center" />
</div>
<Button size="sm" leftIcon={<Img src="images/img_githubmarksvg.svg" alt="github-mark.svg" className="h-[24px] w-[24px]" />
} className="min-w-[387px] gap-3 rounded-[30px] font-light sm:px-5">
Смотреть больше на GitHub</Button>
</div>
</div>
</div>
<div className="flex h-[300px] items-end justify-center bg-[url(/public/images/img_div_parallax.png)] bg-cover bg-no-repeat px-14 py-[123px] md:h-auto md:p-5">
<Text size="4xl" as="p" className="mt-2">
Технологические решения с акцентом на профессионализм</Text>
</div>
<div className="bg-gradient">
<div className="flex h-[665px] flex-col items-center justify-center gap-[17px] bg-[url(/public/images/img_div_container.png)] bg-cover bg-no-repeat p-14 md:h-auto md:p-5">
<div className="flex w-[11%] items-center gap-2 md:w-full">
<div className="h-px w-[20px] flex-1 bg-white-A700" />
<Text size="3xl" as="p" className="text-center">
Связаться</Text>
<div className="h-px w-[20px] flex-1 bg-white-A700" />
</div>
<div className="mb-[3px] flex w-[34%] flex-col gap-6 rounded-[16px] border border-solid border-gray-600_26 bg-gray-600_4c p-[25px] md:w-full sm:p-5">
<div className="flex flex-col items-start justify-center gap-2">
<Text as="p" className="!text-gray-300">
Введите email:</Text>
<Input color="gray_900" size="xs" name="email" className="self-stretch rounded-md border border-solid border-blue_gray-700 sm:pr-5" />
</div>
<div className="flex flex-col items-start justify-center gap-[7px]">
<Text as="p" className="mt-0.5 !text-gray-300">
Опишите свою проблему подробнее:</Text>
<TextArea shape="round" name="textarea" className="self-stretch" />
</div>
<Button shape="round" className="w-full sm:px-5">
Отправить</Button>
</div>
</div>
</div>
</div>
<footer className="flex items-center justify-center bg-black-900_01 p-6 sm:p-5">
<div className="mt-5 flex w-[66%] flex-col items-center justify-center gap-[25px] md:w-full">
<div className="flex flex-col gap-6 self-stretch">
<div className="flex items-start justify-between gap-5 md:flex-col">
<div className="mt-0.5 flex w-[31%] flex-col pb-[15px] md:w-full">
<div className="flex self-start">
<Text size="3xl" as="p" className="!font-medium">
Портфолио</Text>
</div>
<div className="mt-[15px] flex">
<Text as="p" className="w-[80%] !font-thin leading-6">
<>Спасибо, что посетили мой личный сайт-<br />портфолио.</></Text>
</div>
<div className="mt-7 flex">
<Text as="p" className="self-start !font-thin">
Свяжитесь со мной, чтобы создавать вместе 🚀</Text>
</div>
</div>
<div className="flex flex-col items-start gap-[3px]">
<Text size="3xl" as="p" className="!font-medium">
Навигация</Text>
<ul className="flex flex-col items-start gap-[3px]">
<li>
<a href="#">
<Text as="p" className="!font-thin">
Обо мне</Text>
</a>
</li>
<li>
<a href="#">
<Text as="p" className="!font-thin">
Навыки</Text>
</a>
</li>
<li>
<a href="#">
<Text as="p" className="!font-thin">
Мои работы</Text>
</a>
</li>
</ul>
</div>
<div className="flex w-[18%] flex-col gap-3.5 md:w-full">
<div className="flex self-start">
<Text size="3xl" as="p" className="!font-medium">
Контакты</Text>
</div>
<div className="relative h-[96px]">
<ul className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max w-full flex-col gap-12">
<li>
<a href="#">
<div className="flex items-center gap-2 self-start">
<Img src="images/img_linkedin.svg" alt="linkedin_one" className="h-[24px]" />
<Text as="p" className="self-end !font-thin">
I&#39;m based in Tomsk, Russia.</Text>
</div>
</a>
</li>
<li>
<a href="#">
<div className="flex items-center gap-2 self-start">
<Img src="images/img_call.svg" alt="call_one" className="h-[24px]" />
<Text as="p" className="!font-thin">
+7 (923) XXX-XX-XX</Text>
</div>
</a>
</li>
</ul>
<div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max w-max items-center gap-2">
<Img src="images/img_lock.svg" alt="lock_one" className="h-[24px] self-start" />
<Text as="p" className="self-end !font-thin">
evgeniy0ctreles@gmail.com</Text>
</div>
</div>
<div className="flex gap-2 self-start">
<Img src="images/img_facebook.svg" alt="facebook_one" className="h-[36px]" />
<Img src="images/img_info.svg" alt="info_one" className="h-[36px]" />
<Img src="images/img_link.svg" alt="link_four" className="h-[36px]" />
</div>
</div>
</div>
<div className="h-px bg-white-A700_3f" />
</div>
<Text as="p" className="!font-thin">
Разработано с ❤️ Евгением Быстровым</Text>
</div>
</footer>
</div>

      </>
    )
  }
  