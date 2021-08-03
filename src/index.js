/* eslint-disable */
import embed from "./configure";
import connect from "./connect";

async function run() {
  const app = await connect({
    url: "https://dummy.server.com",
    webIntegrationId: "<ID>",
    appId: "<APP_ID>",
  });

  const variableListProps = {
    qInfo: {
      qId: "VariableList",
      qType: "VariableList",
    },
    qVariableListDef: {
      qType: "variable",
      qData: {
        tags: "/tags",
        name: "/",
      },
    },
  };

  const n = embed(app);

  const variableListModel = await app
    .createSessionObject(variableListProps)
    .then((model) => model);

  variableListModel.getLayout().then((layout) => {
    passVariable(layout);
  });

  function passVariable(layout) {
    const {
      qVariableList: { qItems: data },
    } = layout;
    console.log(data)

    var pass_need = data[1].qName;

    n.render({
      type: "action-button",
      element: document.querySelector(".object_new"),
      properties: {
        actions: [
          {
            actionType: "setVariable",
            variable: pass_need,
            value: "Decade",
          },
        ],
        style: {
          label: "By Decade",
          font: {
            size: 0.7,
            style: {
              italic: true,
            },
          },
          background: {
            color: "Grey",
          },
          border: {
            useBorder: true,
            radius: 0.25,
            width: 0.1,
            color: "Grey",
          },
          icon: {},
        },
      },
    }),
      n.render({
        type: "action-button",
        element: document.querySelector(".object_new"),
        properties: {
          actions: [
            {
              actionType: "setVariable",
              variable: pass_need,
              value: "Actor",
            },
          ],
          style: {
            label: "By Actor",
            font: {
              size: 0.7,
              style: {
                italic: true,
              },
            },
            background: {
              color: "Grey",
            },
            border: {
              useBorder: true,
              radius: 0.25,
              width: 0.1,
              color: "Grey",
            },
            icon: {},
          },
        },
      }),
      n.render({
        type: "action-button",
        element: document.querySelector(".object_new"),
        properties: {
          actions: [
            {
              actionType: "setVariable",
              variable: pass_need,
              value: "Director",
            },
          ],
          style: {
            label: "By Director",
            font: {
              size: 0.7,
              style: {
                italic: true,
              },
            },
            background: {
              color: "Grey",
            },
            border: {
              useBorder: true,
              radius: 0.25,
              width: 0.1,
              color: "Grey",
            },
            icon: {},
          },
        },
      });
  }

  (await n.selections()).mount(document.querySelector(".toolbar"));

  n.render({
    element: document.querySelector(".object"),
    id: "QVngr",
  }),
    n.render({
      element: document.querySelector(".object"),
      id: "JbtsBVB",
    }),

    n.render({
      element: document.querySelector(".object"),
      id: "mmrBUAe",
    });
}

run();
