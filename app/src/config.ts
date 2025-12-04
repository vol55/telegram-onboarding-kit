import { defineConfig } from '@tok/generation';

export default defineConfig({
  // If you want to add language/currency localization – see ./examples/meditation as reference

  pages: [
    {
      slides: [
        // intro
        {
          media: {
            type: 'sticker',
            src: import('./assets/stickers/duck_hello.tgs'),
            size: 250,
          },
          shape: 'square',
          pagination: 'count',
          title: 'Welcome to Telegram Onboarding Kit',
          description:
            "Create stunning onboarding and paywall for your Telegram Bot using the full power of Mini Apps<br><br>It's <b>simple</b>, <b>fast</b>, highly <b>customizable</b> and <a href='https://github.com/Easterok/telegram-onboarding-kit' target='_blank'>open-source</a>!",
          button: 'Next',
        },

        // form
        {
          extends: 'form', // note, it's important to extend from 'form' here
          media: {
            type: 'sticker',
            src: import('./assets/stickers/duck_spy.tgs'),
            size: 150,
          },
          shape: 'square',
          pagination: 'count',
          title: 'Forms',
          description: 'User fills in the form – the bot receives the data',
          form: [
            {
              id: 'text_from_form',
              placeholder: 'Text input',
              type: 'text',
            },
            {
              id: 'number_from_form',
              placeholder: 'Number input',
              type: 'number',
            },
            {
              id: 'checkbox_from_form',
              placeholder: 'Checkbox',
              type: 'checkbox',
            },
          ],
          button: 'Next',
        },
      ],
      mainButtonText: 'Buy for {price}',
      popup: {
        // popup for payment methods choice
        type: 'web',
      },
      links: [
        {
          text: 'Privacy policy',
          href: 'https://google.com',
        },
        {
          text: 'Terms of use',
          href: 'https://google.com',
        },
      ],
    },
  ],
});
