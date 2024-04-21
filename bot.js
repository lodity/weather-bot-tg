import { Scenes, Telegraf, session } from 'telegraf';
import { start } from './controllers/command.js';
import { weatherScene } from './controllers/scenes/weather.js';
import { startScene } from './controllers/scenes/start.js';
import { historyScene } from './controllers/scenes/history.js';

const bot = new Telegraf(process.env.BOT_TOKEN);

const stage = new Scenes.Stage([startScene, weatherScene, historyScene]);

const setupBot = () => {
    bot.use(session({ collectionName: 'sessions' }));
    bot.use(stage.middleware());

    bot.use((ctx, next) => next());
    bot.start(start);
    // bot.hears(CMD_TEXT.menu, backMenu);
    // bot.hears(CMD_TEXT.weatherI, startWhatWeather);
    return bot;
};

export default setupBot;
