import { render } from "@testing-library/react";
import { rest } from "msw";
import * as React from "react";
import { QueryClient, QueryClientProvider } from "react-query";

export const handlers = [
  rest.get("*/forecast/*", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        data: [
          {
            dt: 1672142400,
            main: {
              temp: 20.64,
              feels_like: 20.98,
              temp_min: 19.49,
              temp_max: 20.64,
              pressure: 1017,
              sea_level: 1017,
              grnd_level: 1016,
              humidity: 85,
              temp_kf: 1.15,
            },
            weather: [
              {
                id: 500,
                main: "Rain",
                description: "light rain",
                icon: "10d",
              },
            ],
            clouds: {
              all: 33,
            },
            wind: {
              speed: 1.58,
              deg: 177,
              gust: 2.01,
            },
            visibility: 7686,
            pop: 0.68,
            rain: {
              "3h": 1.56,
            },
            sys: {
              pod: "d",
            },
            dt_txt: "2022-12-27 12:00:00",
          },
          {
            dt: 1672153200,
            main: {
              temp: 20.79,
              feels_like: 21.07,
              temp_min: 20.57,
              temp_max: 20.79,
              pressure: 1017,
              sea_level: 1017,
              grnd_level: 1017,
              humidity: 82,
              temp_kf: 0.22,
            },
            weather: [
              {
                id: 500,
                main: "Rain",
                description: "light rain",
                icon: "10n",
              },
            ],
            clouds: {
              all: 66,
            },
            wind: {
              speed: 3.96,
              deg: 116,
              gust: 4.11,
            },
            visibility: 10000,
            pop: 0.76,
            rain: {
              "3h": 1.5,
            },
            sys: {
              pod: "n",
            },
            dt_txt: "2022-12-27 15:00:00",
          },
        ],
      })
    );
  }),
];

const createTestQueryClient = () =>
  new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });

export function renderWithClient(ui) {
  const testQueryClient = createTestQueryClient();
  const { rerender, ...result } = render(
    <QueryClientProvider client={testQueryClient}>{ui}</QueryClientProvider>
  );
  return {
    ...result,
    rerender: (rerenderUi) =>
      rerender(
        <QueryClientProvider client={testQueryClient}>
          {rerenderUi}
        </QueryClientProvider>
      ),
  };
}

export function createWrapper() {
  const testQueryClient = createTestQueryClient();
  return ({ children }) => (
    <QueryClientProvider client={testQueryClient}>
      {children}
    </QueryClientProvider>
  );
}
