import { Email } from './email';

export const localAccounts = ['help@edc.com', 'news@edc.com'];

export class EmailsData {
  eMail1 = new Email(1, 'EDC features', [ 'helper@edc.com' ], '12:15',
    `Create a brick in a blast, and integrate it to your project.
   Same with article, the links are generated and redirect automatically to your help reader application. `);
  eMail2 = new Email(2, 'News', [ 'news@edc.com', 'blog@documentation.com' ], '16:15',
    `Our approach to embedding contextualized user help improves the entire user experience.
So we didn’t make just another documentation tool.`);
  eMail3 = new Email(3, 'Shape your product strategy', [ 'news@edc.com', 'helper@edc.com', 'debbie@edc.com' ], '16:15',
    `Because our products are created for people, we also believe users should have a say in the final product.

And that's what edc does: it allows developers, writers, SMEs, support, and users to all be contributors to the final product.
The edc environment encourages collaboration, and provides the interface to do so easily.

With users at the center of our product strategy, we believe help should be contextualized, provide only what's needed,
 and delivered real-time only when it's needed.
`);
  eMail4 = new Email(1, 'A new approach to content design', [ 'news@edc.com' ], '09:05', `
  edc is a SAAS software to help developers, content writers, product owners deliver product and content.
   edc provides an IDE plugin for developers to map user bricks for content.
   We deliver the technology layer to enable connection.`);
  eMail5 = new Email(2, 'edc editor', [ 'news@edc.com' ], '14:45', `The edc editor allows contributes to create modular
   content and map it to articles.
   Add images, links, video, plus a whole lot more. Content is delivered directly to your software in a few simple steps. `);

  eMailsList = [
    {
      account: localAccounts[0],
      emails: [
        this.eMail1,
        this.eMail2,
        this.eMail3
      ]
    },
    {
      account: localAccounts[1],
      emails: [
        this.eMail4,
        this.eMail5
      ]
    }
  ];
}
