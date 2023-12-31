/*
   This extension was made with TurboBuilder!
   https://turbobuilder-steel.vercel.app/
*/
(async function(Scratch) {
    const variables = {};
    const blocks = [];
    const menus = [];
    const MenuIconURI = data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIyOTkuODMzMzMiIGhlaWdodD0iMTQ5LjE5MzIzIiB2aWV3Qm94PSIwLDAsMjk5LjgzMzMzLDE0OS4xOTMyMyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IHgxPSIyNDAiIHkxPSIxMDUuNDAzMzkiIHgyPSIyNDAiIHkyPSIyNTQuNTk2NjIiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiBpZD0iY29sb3ItMSI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjMTdiY2ZmIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjZmZmZmZmIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTkwLjA4MzMzLC0xMDUuNDAzMzgpIj48ZyBkYXRhLXBhcGVyLWRhdGE9InsmcXVvdDtpc1BhaW50aW5nTGF5ZXImcXVvdDs6dHJ1ZX0iIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLWRhc2hhcnJheT0iIiBzdHJva2UtZGFzaG9mZnNldD0iMCIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik05MC4wODMzMywyNTQuNTk2NjJ2LTE0OS4xOTMyM2gyOTkuODMzMzN2MTQ5LjE5MzIzeiIgZmlsbD0idXJsKCNjb2xvci0xKSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjAiLz48Zz48dGV4dCB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyMjIuMzM4ODQsMTY3LjQxOTA4KSBzY2FsZSgxLjA0NzUyLDEuMDQ3NTIpIiBmb250LXNpemU9IjQwIiB4bWw6c3BhY2U9InByZXNlcnZlIiBmaWxsPSIjZmZmZmZmIiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBmb250LWZhbWlseT0iQnViYmx5IiBmb250LXdlaWdodD0ibm9ybWFsIiB0ZXh0LWFuY2hvcj0ic3RhcnQiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTogbm9ybWFsIj48dHNwYW4geD0iMCIgZHk9IjAiPkc8L3RzcGFuPjwvdGV4dD48cGF0aCBkPSJNMjE4LjU5MzM4LDE0MC4wODMzNGwyMS4wNzMyOSwtMTIuNTgzMzRsMjEuMDczMjksMTIuNTgzMzR2MjUuMTY2NjZsLTIxLjA3MzI5LDEyLjU4MzM0bC0yMS4wNzMyOCwtMTIuNTgzMzR6IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMyIvPjwvZz48dGV4dCB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxOTcuMjUwMDIsMTk5LjQzNTQyKSBzY2FsZSgwLjUsMC41KSIgZm9udC1zaXplPSI0MCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgZmlsbD0iI2ZmZmZmZiIgZmlsbC1ydWxlPSJub256ZXJvIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLWRhc2hhcnJheT0iIiBzdHJva2UtZGFzaG9mZnNldD0iMCIgZm9udC1mYW1pbHk9IkJ1YmJseSIgZm9udC13ZWlnaHQ9Im5vcm1hbCIgdGV4dC1hbmNob3I9InN0YXJ0IiBzdHlsZT0ibWl4LWJsZW5kLW1vZGU6IG5vcm1hbCI+PHRzcGFuIHg9IjAiIGR5PSIwIj50b29sYm94PC90c3Bhbj48L3RleHQ+PHRleHQgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjIzLjcwNjY3LDIxNy4zOTk2Mykgc2NhbGUoMC41ODM1NywwLjU4MzU3KSIgZm9udC1zaXplPSI0MCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgZmlsbD0iI2ZmZmZmZiIgZmlsbC1ydWxlPSJub256ZXJvIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLWRhc2hhcnJheT0iIiBzdHJva2UtZGFzaG9mZnNldD0iMCIgZm9udC1mYW1pbHk9IkJ1YmJseSIgZm9udC13ZWlnaHQ9Im5vcm1hbCIgdGV4dC1hbmNob3I9InN0YXJ0IiBzdHlsZT0ibWl4LWJsZW5kLW1vZGU6IG5vcm1hbCI+PHRzcGFuIHg9IjAiIGR5PSIwIj52MTwvdHNwYW4+PC90ZXh0PjwvZz48L2c+PC9zdmc+PCEtLXJvdGF0aW9uQ2VudGVyOjE0OS45MTY2NjUwMDAwMDAwMjo3NC41OTY2MTUtLT4=

    function doSound(ab, cd, runtime) {
        const audioEngine = runtime.audioEngine;

        const fetchAsArrayBufferWithTimeout = (url) =>
            new Promise((resolve, reject) => {
                const xhr = new XMLHttpRequest();
                let timeout = setTimeout(() => {
                    xhr.abort();
                    reject(new Error("Timed out"));
                }, 5000);
                xhr.onload = () => {
                    clearTimeout(timeout);
                    if (xhr.status === 200) {
                        resolve(xhr.response);
                    } else {
                        reject(new Error(`HTTP error ${xhr.status} while fetching ${url}`));
                    }
                };
                xhr.onerror = () => {
                    clearTimeout(timeout);
                    reject(new Error(`Failed to request ${url}`));
                };
                xhr.responseType = "arraybuffer";
                xhr.open("GET", url);
                xhr.send();
            });

        const soundPlayerCache = new Map();

        const decodeSoundPlayer = async (url) => {
            const cached = soundPlayerCache.get(url);
            if (cached) {
                if (cached.sound) {
                    return cached.sound;
                }
                throw cached.error;
            }

            try {
                const arrayBuffer = await fetchAsArrayBufferWithTimeout(url);
                const soundPlayer = await audioEngine.decodeSoundPlayer({
                    data: {
                        buffer: arrayBuffer,
                    },
                });
                soundPlayerCache.set(url, {
                    sound: soundPlayer,
                    error: null,
                });
                return soundPlayer;
            } catch (e) {
                soundPlayerCache.set(url, {
                    sound: null,
                    error: e,
                });
                throw e;
            }
        };

        const playWithAudioEngine = async (url, target) => {
            const soundBank = target.sprite.soundBank;

            let soundPlayer;
            try {
                const originalSoundPlayer = await decodeSoundPlayer(url);
                soundPlayer = originalSoundPlayer.take();
            } catch (e) {
                console.warn(
                    "Could not fetch audio; falling back to primitive approach",
                    e
                );
                return false;
            }

            soundBank.addSoundPlayer(soundPlayer);
            await soundBank.playSound(target, soundPlayer.id);

            delete soundBank.soundPlayers[soundPlayer.id];
            soundBank.playerTargets.delete(soundPlayer.id);
            soundBank.soundEffects.delete(soundPlayer.id);

            return true;
        };

        const playWithAudioElement = (url, target) =>
            new Promise((resolve, reject) => {
                const mediaElement = new Audio(url);

                mediaElement.volume = target.volume / 100;

                mediaElement.onended = () => {
                    resolve();
                };
                mediaElement
                    .play()
                    .then(() => {
                        // Wait for onended
                    })
                    .catch((err) => {
                        reject(err);
                    });
            });

        const playSound = async (url, target) => {
            try {
                if (!(await Scratch.canFetch(url))) {
                    throw new Error(`Permission to fetch ${url} denied`);
                }

                const success = await playWithAudioEngine(url, target);
                if (!success) {
                    return await playWithAudioElement(url, target);
                }
            } catch (e) {
                console.warn(`All attempts to play ${url} failed`, e);
            }
        };

        playSound(ab, cd)
    }
    class Extension {
        getInfo() {
            return {
                "id": "Gtoolbox",
                "name": "Gtoolbox",
                "color1": "#0088ff",
                "color2": "#0063ba",
                MenuIconURI,
                "blocks": blocks
            }
        }
    }
    blocks.push({
        opcode: `StrictlyEqual`,
        blockType: Scratch.BlockType.BOOLEAN,
        text: `[1] === [2]`,
        arguments: {
            "1": {
                type: Scratch.ArgumentType.STRING,
            },
            "2": {
                type: Scratch.ArgumentType.STRING,
            },
        },
        disableMonitor: true
    });
    Extension.prototype[`StrictlyEqual`] = async (args, util) => {
        return (args["1"] === args["2"])
    };

    blocks.push({
        opcode: `null`,
        blockType: Scratch.BlockType.REPORTER,
        text: `null`,
        arguments: {},
        disableMonitor: true
    });
    Extension.prototype[`null`] = async (args, util) => {
        return null
    };

    blocks.push({
        opcode: `LeapYear`,
        blockType: Scratch.BlockType.BOOLEAN,
        text: `is leap year?`,
        arguments: {},
        disableMonitor: true
    });
    Extension.prototype[`LeapYear`] = async (args, util) => {
        return ((new Date(new Date(Date.now()).getYear(), 1, 29)).getDate() === 29)
    };

    blocks.push({
        opcode: `GreatOrLess`,
        blockType: Scratch.BlockType.BOOLEAN,
        text: `[1a] >< [2a]`,
        arguments: {
            "1a": {
                type: Scratch.ArgumentType.NUMBER,
            },
            "2a": {
                type: Scratch.ArgumentType.NUMBER,
            },
        },
        disableMonitor: true
    });
    Extension.prototype[`GreatOrLess`] = async (args, util) => {
        if (Boolean(((args["1a"] < args["2a"]) || (args["1a"] > args["2a"])))) {
            return true

        } else {
            return false

        };
    };

    blocks.push({
        opcode: `YearToMoonYears`,
        blockType: Scratch.BlockType.REPORTER,
        text: `[year] to moon years`,
        arguments: {
            "year": {
                type: Scratch.ArgumentType.NUMBER,
            },
        },
        disableMonitor: true
    });
    Extension.prototype[`YearToMoonYears`] = async (args, util) => {
        return ((args["year"] * 365) / 27)
    };

    Scratch.extensions.register(new Extension());
})(Scratch);
