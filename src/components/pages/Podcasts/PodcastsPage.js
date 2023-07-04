import React, { useEffect, useState } from "react";
import SpotifyPlayerWidget from "./SpotifyPlayer";
import styles from "./PodcastsPage.module.css";
import ContentLoader from '../../ui/ContentLoader'
const PodcastsPage = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoading = () => {
    setIsLoading(false);
  };

  useEffect(() => {
    setTimeout(() => {
        handleLoading();
    }, 1000);

  }, []);

  const url = [
    "https://open.spotify.com/episode/1wg2O5hCQlpuPnWAR0ZiuM?si=1bfbcb5e004d4859",
    "https://open.spotify.com/episode/4qCrxBBHrbyWExDqY0eJud?si=f0a63780e7724103",
    "https://open.spotify.com/episode/2m4tkSn2pAyRZLvTnskL0i?si=a2c6de8143894d82",
    "https://open.spotify.com/episode/7FETl1jiKkItsvAZeSyYwB?si=76d1cbef451947a6",
    "https://open.spotify.com/episode/0YZtyiaLF1j7pn1gimC8fH?si=c8bff34e9c5444ba",
    "https://open.spotify.com/episode/0ckYeRUWAvOLxjxKVNOiRI?si=9ce7aa627cbf4476",
    "https://open.spotify.com/episode/78BVTClrZQHl2BoavdygKV?si=efe71284ebe0456a",
    "https://open.spotify.com/episode/1Q8TtGWRQfsnwMdQUpJfgY?si=ff69b407c15b4d11",
    "https://open.spotify.com/episode/2P2uUmRC25J4lt7KoCFFWd?si=b8a7fb7271b34002",
    "https://open.spotify.com/episode/5W1nIlCrdzfhwOjjfApoHc?si=f93dad3feb1241ec",
    "https://open.spotify.com/episode/5grrJlD04hFjrtqci73rsQ?si=3c592635486c4cf0",
    "https://open.spotify.com/episode/2Jwi6Q0GV7hlknsu7l5gcD?si=c88520b988f44142",
    "https://open.spotify.com/episode/2Kna5fxU5qfszrYV1sF0rC?si=26278412fdde4df4",
    "https://open.spotify.com/episode/1ji7FZbu7iL5S8IgbOLnEw?si=c2471353fcac4c6c",
    "https://open.spotify.com/episode/31glkxhmueZwPrzM5Y90Qt?si=7640b0d17f0c4990",
    "https://open.spotify.com/episode/4WnhIMtz1utDnKASvFtKsN?si=9af4dc2930764e28",
    "https://open.spotify.com/episode/7l1difMNaPJX2uL4sKqis3?si=de2db754aa904b66",
    "https://open.spotify.com/episode/0CJgDvi4JqI2I0hcSkqLbH?si=946ef46baba04865",
    "https://open.spotify.com/episode/0jhVbjp99ZFOp8szYRphxt?si=2d97a7360b714604",
    "https://open.spotify.com/episode/3RTvGTbxiabgwRh07SzESd?si=a0c636811d724b02",
    "https://open.spotify.com/episode/2I7RKoXgfkyBrFJoellqSD?si=727a8c1e62674dea",
    "https://open.spotify.com/episode/2JB9WOm1RiVunzvpGVP4aH?si=2aa7e1145e4248c8",
    "https://open.spotify.com/episode/6SyTvXsSbgsLWkkBlbK3dO?si=5e5c033e151d4a0e",
  ];

  return (
    <>
      <div className={styles.container_podcast}>
        <div className={styles.grid}>
          {url.map((item) => (
            isLoading ? <ContentLoader /> :
            <SpotifyPlayerWidget url={item} />
          ))}
        </div>
        <div className={styles.text_container}>
          <h1 className={styles.h1}>Meditasyon Egzersizleri Podcast Serisi</h1>
          <p className={styles.p}>
            Podcastleri{" "}
            <a href="https://open.spotify.com/show/0e08AJdrnZ9b3wWUnTmASX?si=d03d1ac416d24ccd">
              Spotify
            </a>{" "}
            üzerinden dinleyebilirsiniz...
          </p>
        </div>
      </div>
    </>
  );
};

export default PodcastsPage;
