<!-- 此文件由 scripts/build_index.py 自动生成，请勿手工编辑。 -->
# 知识库索引

> 点击问题即可进入对应的答案笔记。填写“我的答案”后，下一次生成索引时会自动勾选。

当前进度：**1 / 540**

## 题库导航

- [LLM 与 Agent 面试问题总表](#bank-1)（440 题）
- [LLM 与 Agent 岗位工程基础补丁题库](#bank-2)（100 题）

<a id="bank-1"></a>
## LLM 与 Agent 面试问题总表

题目来源：[INTERVIEW_QUESTIONS_AGENT_HARNESS_EXPANDED.md](INTERVIEW_QUESTIONS_AGENT_HARNESS_EXPANDED.md)

<a id="bank-1-section-1"></a>
### 项目与简历深挖

- [ ] [EXP-001 · 请用三分钟介绍一个你最有代表性的 LLM 或 Agent 项目，并说明你的个人贡献。](answers/exp/EXP-001.md) `[补充]`
- [ ] [EXP-002 · 这个项目解决了什么业务问题，为什么需要使用大模型而不是传统方案？](answers/exp/EXP-002.md) `[补充]`
- [ ] [EXP-003 · 项目的离线指标、在线指标和最终业务收益分别是什么？](answers/exp/EXP-003.md) `[补充]`
- [ ] [EXP-004 · 你如何设计项目的基线方案，并证明后续优化确实有效？](answers/exp/EXP-004.md) `[补充]`
- [ ] [EXP-005 · 项目中最困难的问题是什么，你如何定位根因并完成验证？](answers/exp/EXP-005.md) `[补充]`
- [ ] [EXP-006 · 你做过哪些失败的尝试，失败原因是什么？](answers/exp/EXP-006.md) `[补充]`
- [ ] [EXP-007 · 如果重新做一次，你会怎样调整技术路线？](answers/exp/EXP-007.md) `[补充]`
- [ ] [EXP-008 · 项目中的数据从哪里来，如何处理质量、版权、隐私和数据泄漏问题？](answers/exp/EXP-008.md) `[补充]`
- [ ] [EXP-009 · 如何证明模型提升来自你的方法，而不是数据量、提示词或随机波动？](answers/exp/EXP-009.md) `[补充]`
- [ ] [EXP-010 · 你的方案在延迟、吞吐、质量和成本之间做了哪些权衡？](answers/exp/EXP-010.md) `[补充]`
- [ ] [EXP-011 · 项目上线前如何进行灰度、回滚和风险控制？](answers/exp/EXP-011.md) `[补充]`
- [ ] [EXP-012 · 线上出现模型效果退化时，你会按照什么顺序排查？](answers/exp/EXP-012.md) `[补充]`
- [ ] [EXP-013 · 如何监控模型、检索、工具调用和业务链路的版本变化？](answers/exp/EXP-013.md) `[补充]`
- [ ] [EXP-014 · 如何设计消融实验，验证系统中每个组件的贡献？](answers/exp/EXP-014.md) `[补充]`
- [ ] [EXP-015 · 如果算力、数据或交付时间减半，你会保留和舍弃哪些部分？](answers/exp/EXP-015.md) `[补充]`
<a id="bank-1-section-2"></a>
### Transformer 与模型架构

- [x] [ARC-001 · 请完整描述原始 Transformer 的 Encoder、Decoder 及其数据流。](answers/arc/ARC-001.md) `[项目]`
- [ ] [ARC-002 · Transformer 相比 RNN、LSTM 的主要优势和代价是什么？](answers/arc/ARC-002.md) `[项目]`
- [ ] [ARC-003 · 请从矩阵形状出发推导 Scaled Dot-Product Attention 的完整计算过程。](answers/arc/ARC-003.md) `[项目]`
- [ ] [ARC-004 · 为什么 Attention 的 logits 要除以 \(\sqrt{d_k}\)？如果不缩放会怎样？](answers/arc/ARC-004.md) `[项目]`
- [ ] [ARC-005 · Self-Attention 的时间复杂度、空间复杂度和主要瓶颈分别是什么？](answers/arc/ARC-005.md) `[项目]`
- [ ] [ARC-006 · Multi-Head Attention 为什么比单头注意力更有表达能力？](answers/arc/ARC-006.md) `[项目]`
- [ ] [ARC-007 · MHA、MQA、GQA 和 MLA 在参数、计算和 KV Cache 上有什么区别？](answers/arc/ARC-007.md) `[项目]`
- [ ] [ARC-008 · 如何从零实现 GQA，Query 头与 KV 头如何映射？](answers/arc/ARC-008.md) `[项目]`
- [ ] [ARC-009 · Causal Mask 的作用是什么，训练和推理时如何构造？](answers/arc/ARC-009.md) `[项目]`
- [ ] [ARC-010 · Padding Mask、Causal Mask 和 Attention Bias 有什么区别，如何正确广播？](answers/arc/ARC-010.md) `[补充]`
- [ ] [ARC-011 · RoPE 如何把相对位置信息编码进 Query 和 Key？](answers/arc/ARC-011.md) `[项目]`
- [ ] [ARC-012 · 绝对位置编码、相对位置编码、ALiBi 和 RoPE 各有什么优缺点？](answers/arc/ARC-012.md) `[项目]`
- [ ] [ARC-013 · RoPE 的频率基底、旋转维度和数值精度会如何影响模型？](answers/arc/ARC-013.md) `[补充]`
- [ ] [ARC-014 · NTK-aware Scaling、Position Interpolation 和 YaRN 分别如何扩展上下文？](answers/arc/ARC-014.md) `[项目]`
- [ ] [ARC-015 · LayerNorm 与 BatchNorm 的归一化维度、训练行为和适用场景有何不同？](answers/arc/ARC-015.md) `[项目]`
- [ ] [ARC-016 · Pre-Norm、Post-Norm 和 Sandwich-Norm 的结构与训练稳定性有何差异？](answers/arc/ARC-016.md) `[项目]`
- [ ] [ARC-017 · RMSNorm 与 LayerNorm 有什么区别，为什么现代 LLM 常使用 RMSNorm？](answers/arc/ARC-017.md) `[项目]`
- [ ] [ARC-018 · 标准 FFN、GLU、GEGLU 和 SwiGLU 的结构与参数量有何不同？](answers/arc/ARC-018.md) `[项目]`
- [ ] [ARC-019 · Transformer 的 FFN 中间维度为什么常取约 \(4d\)，SwiGLU 下为何常改为约 \(8d/3\)？](answers/arc/ARC-019.md) `[项目]`
- [ ] [ARC-020 · Encoder-Only、Decoder-Only 和 Encoder-Decoder 模型分别适合哪些任务？](answers/arc/ARC-020.md) `[项目]`
- [ ] [ARC-021 · 为什么主流生成式 LLM 多采用 Decoder-Only 架构？这一判断有哪些例外？](answers/arc/ARC-021.md) `[项目]`
- [ ] [ARC-022 · 参数共享、Embedding 与 LM Head 权重绑定有什么作用和限制？](answers/arc/ARC-022.md) `[补充]`
- [ ] [ARC-023 · Residual Connection 为什么能改善深层网络训练，它与 Pre-Norm 如何共同影响梯度流？](answers/arc/ARC-023.md) `[补充]`
- [ ] [ARC-024 · Attention 中为什么通常对 logits 做 Softmax，可以替换成哪些函数？](answers/arc/ARC-024.md) `[补充]`
- [ ] [ARC-025 · Cross-Attention 与 Self-Attention 的输入、缓存方式和使用场景有何区别？](answers/arc/ARC-025.md) `[补充]`
- [ ] [ARC-026 · 局部注意力、滑动窗口注意力、稀疏注意力和线性注意力分别解决什么问题？](answers/arc/ARC-026.md) `[补充]`
- [ ] [ARC-027 · 训练时的 Teacher Forcing 与推理时的自回归生成为什么会产生 Exposure Bias？](answers/arc/ARC-027.md) `[补充]`
- [ ] [ARC-028 · 为什么扩大模型宽度、深度、头数会带来不同的性能和训练稳定性影响？](answers/arc/ARC-028.md) `[补充]`
- [ ] [ARC-029 · 如何估算一个 Decoder-Only Transformer 的参数量？](answers/arc/ARC-029.md) `[补充]`
- [ ] [ARC-030 · 如何估算 Transformer 单次前向、训练一步和生成一个 token 的 FLOPs？](answers/arc/ARC-030.md) `[项目]`
<a id="bank-1-section-3"></a>
### Tokenizer、数据与预训练

- [ ] [DAT-001 · 请描述 BPE 的训练过程和对新文本的编码过程。](answers/dat/DAT-001.md) `[项目]`
- [ ] [DAT-002 · BPE、Byte-Level BPE、WordPiece、Unigram 和 SentencePiece 有什么区别？](answers/dat/DAT-002.md) `[项目]`
- [ ] [DAT-003 · WordPiece 的合并目标与 BPE 的频次合并有何差异？](answers/dat/DAT-003.md) `[项目]`
- [ ] [DAT-004 · Unigram Tokenizer 为什么是自顶向下裁剪，Viterbi 算法在其中做什么？](answers/dat/DAT-004.md) `[项目]`
- [ ] [DAT-005 · 中文、多语言文本和代码对 Tokenizer 设计提出了哪些特殊要求？](answers/dat/DAT-005.md) `[项目]`
- [ ] [DAT-006 · 词表大小如何影响参数量、序列长度、训练效率和下游效果？](answers/dat/DAT-006.md) `[项目]`
- [ ] [DAT-007 · 如何衡量 Tokenizer 的压缩率、字符覆盖率和未知词问题？](answers/dat/DAT-007.md) `[项目]`
- [ ] [DAT-008 · Byte Fallback 的作用是什么，它如何避免 OOV？](answers/dat/DAT-008.md) `[补充]`
- [ ] [DAT-009 · 特殊 token 应如何设计，新增 token 后为什么需要调整 Embedding？](answers/dat/DAT-009.md) `[补充]`
- [ ] [DAT-010 · Tokenizer 的 Normalization 和 Pre-tokenization 可能引入哪些信息损失？](answers/dat/DAT-010.md) `[补充]`
- [ ] [DAT-011 · 如何比较两个 Tokenizer 对中文、英文、代码和数学公式的效率？](answers/dat/DAT-011.md) `[补充]`
- [ ] [DAT-012 · 继续预训练时应复用原词表还是扩展词表，分别有什么代价？](answers/dat/DAT-012.md) `[补充]`
- [ ] [DAT-013 · 预训练数据清洗通常包括哪些步骤，顺序为什么重要？](answers/dat/DAT-013.md) `[补充]`
- [ ] [DAT-014 · 文档级、段落级和近似去重如何实现，各自会漏掉什么？](answers/dat/DAT-014.md) `[补充]`
- [ ] [DAT-015 · 如何检测并减少 Benchmark Contamination 和训练测试集泄漏？](answers/dat/DAT-015.md) `[补充]`
- [ ] [DAT-016 · 预训练数据的质量、数量和多样性之间如何权衡？](answers/dat/DAT-016.md) `[补充]`
- [ ] [DAT-017 · 不同领域和语言的数据混合比例如何确定？](answers/dat/DAT-017.md) `[补充]`
- [ ] [DAT-018 · Curriculum Learning 在大模型预训练中如何应用？](answers/dat/DAT-018.md) `[补充]`
- [ ] [DAT-019 · Packing、Padding 和 Sequence Length Warmup 如何影响训练效率？](answers/dat/DAT-019.md) `[补充]`
- [ ] [DAT-020 · 数据采样中的 Upsampling、Temperature Sampling 和 Reweighting 有何区别？](answers/dat/DAT-020.md) `[补充]`
- [ ] [DAT-021 · Scaling Law 描述了什么，Chinchilla Scaling 对模型与数据配比有何启示？](answers/dat/DAT-021.md) `[补充]`
- [ ] [DAT-022 · Continued Pretraining、Domain-Adaptive Pretraining 和 SFT 的目标有什么区别？](answers/dat/DAT-022.md) `[补充]`
- [ ] [DAT-023 · 合成数据有哪些生成、过滤和防止模型坍缩的方法？](answers/dat/DAT-023.md) `[补充]`
- [ ] [DAT-024 · 如何构建高质量数学、代码或工具调用预训练数据？](answers/dat/DAT-024.md) `[补充]`
- [ ] [DAT-025 · 数据版权、个人信息和遗忘请求会如何影响训练数据管线？](answers/dat/DAT-025.md) `[补充]`
<a id="bank-1-section-4"></a>
### 损失函数与训练优化

- [ ] [OPT-001 · Decoder-Only LLM 的 Next-Token Prediction 损失如何计算？](answers/opt/OPT-001.md) `[项目]`
- [ ] [OPT-002 · 交叉熵、信息熵、负对数似然和 KL 散度之间是什么关系？](answers/opt/OPT-002.md) `[项目]`
- [ ] [OPT-003 · Perplexity 的定义是什么，它为什么不能完整反映生成质量？](answers/opt/OPT-003.md) `[项目]`
- [ ] [OPT-004 · Label Smoothing 对语言模型训练有何影响，为什么 LLM 预训练中并不总使用？](answers/opt/OPT-004.md) `[补充]`
- [ ] [OPT-005 · 如何在多轮对话和 Packing 数据中正确构造 Loss Mask？](answers/opt/OPT-005.md) `[补充]`
- [ ] [OPT-006 · SGD、Adam、AdamW 和 Adafactor 的更新规则与适用场景有何不同？](answers/opt/OPT-006.md) `[项目]`
- [ ] [OPT-007 · AdamW 为什么要将 Weight Decay 与自适应梯度更新解耦？](answers/opt/OPT-007.md) `[项目]`
- [ ] [OPT-008 · Adam 的 \(\beta_1\)、\(\beta_2\)、epsilon 和学习率分别控制什么？](answers/opt/OPT-008.md) `[项目]`
- [ ] [OPT-009 · Warmup 为什么有助于大模型稳定训练，步数应如何选择？](answers/opt/OPT-009.md) `[项目]`
- [ ] [OPT-010 · Cosine Decay、Linear Decay 和 WSD 学习率调度各适合什么训练计划？](answers/opt/OPT-010.md) `[项目]`
- [ ] [OPT-011 · 梯度消失和梯度爆炸的成因及排查方法是什么？](answers/opt/OPT-011.md) `[项目]`
- [ ] [OPT-012 · Gradient Clipping 应按值还是按范数进行，应该在训练流程的哪个位置执行？](answers/opt/OPT-012.md) `[项目]`
- [ ] [OPT-013 · FP16、BF16、FP8 和 FP32 在指数范围、有效精度和硬件支持上有何差异？](answers/opt/OPT-013.md) `[项目]`
- [ ] [OPT-014 · 混合精度训练中的 Master Weight、Loss Scaling 和溢出检测如何工作？](answers/opt/OPT-014.md) `[项目]`
- [ ] [OPT-015 · 梯度累积与增大全局 Batch Size 是否等价，哪些因素会破坏等价性？](answers/opt/OPT-015.md) `[补充]`
- [ ] [OPT-016 · Batch Size、学习率和训练 token 数之间通常如何联动调整？](answers/opt/OPT-016.md) `[补充]`
- [ ] [OPT-017 · 如何判断一次训练出现了 Loss Spike，常见根因有哪些？](answers/opt/OPT-017.md) `[补充]`
- [ ] [OPT-018 · 参数初始化、残差缩放和归一化如何影响超深 Transformer 的稳定性？](answers/opt/OPT-018.md) `[补充]`
- [ ] [OPT-019 · Activation Checkpointing 如何节省显存，代价是什么？](answers/opt/OPT-019.md) `[补充]`
- [ ] [OPT-020 · EMA、Weight Averaging 和 Checkpoint Averaging 是否适用于 LLM？](answers/opt/OPT-020.md) `[补充]`
- [ ] [OPT-021 · 如何估算训练一个模型所需的显存、计算量、训练时间和成本？](answers/opt/OPT-021.md) `[补充]`
- [ ] [OPT-022 · 训练吞吐中的 MFU、HFU、tokens/s 和 samples/s 分别表示什么？](answers/opt/OPT-022.md) `[补充]`
- [ ] [OPT-023 · 如何诊断训练中的 NaN、Inf、梯度异常和通信超时？](answers/opt/OPT-023.md) `[补充]`
- [ ] [OPT-024 · Checkpoint 中通常保存哪些状态，断点续训如何保证可复现？](answers/opt/OPT-024.md) `[补充]`
- [ ] [OPT-025 · 随机种子、算子确定性和分布式并行会怎样影响实验复现？](answers/opt/OPT-025.md) `[补充]`
<a id="bank-1-section-5"></a>
### 推理、解码与 KV Cache

- [ ] [INF-001 · Prefill 与 Decode 两个阶段的计算特征和性能瓶颈有什么不同？](answers/inf/INF-001.md) `[项目]`
- [ ] [INF-002 · KV Cache 为什么能够降低自回归解码的重复计算？](answers/inf/INF-002.md) `[项目]`
- [ ] [INF-003 · 如何根据层数、KV 头数、Head Dim、序列长度、Batch Size 和数据类型计算 KV Cache 显存？](answers/inf/INF-003.md) `[项目]`
- [ ] [INF-004 · MHA、MQA、GQA 和 MLA 的 KV Cache 大小如何比较？](answers/inf/INF-004.md) `[项目]`
- [ ] [INF-005 · KV Cache 量化、滑动窗口和 Token Eviction 各有什么质量与效率代价？](answers/inf/INF-005.md) `[项目]`
- [ ] [INF-006 · Prefix Cache、Prompt Cache 和 KV Cache 是什么关系？](answers/inf/INF-006.md) `[补充]`
- [ ] [INF-007 · 多轮对话复用 KV Cache 时如何处理模板变化、前缀不匹配和缓存失效？](answers/inf/INF-007.md) `[补充]`
- [ ] [INF-008 · FlashAttention 为什么是 IO-Aware 的，它如何避免物化完整注意力矩阵？](answers/inf/INF-008.md) `[项目]`
- [ ] [INF-009 · Online Softmax 如何在分块计算中保持数值稳定和精确结果？](answers/inf/INF-009.md) `[项目]`
- [ ] [INF-010 · FlashAttention 1、2、3 的优化重点分别是什么？](answers/inf/INF-010.md) `[补充]`
- [ ] [INF-011 · PagedAttention 如何利用分页思想管理不定长请求的 KV Cache？](answers/inf/INF-011.md) `[项目]`
- [ ] [INF-012 · Continuous Batching 与静态 Batching 的调度差异是什么？](answers/inf/INF-012.md) `[项目]`
- [ ] [INF-013 · Iteration-Level Scheduling、Chunked Prefill 和 Decode-First 各解决什么问题？](answers/inf/INF-013.md) `[补充]`
- [ ] [INF-014 · Greedy Search、Beam Search 和 Sampling 的目标与适用任务有何不同？](answers/inf/INF-014.md) `[项目]`
- [ ] [INF-015 · Temperature 如何改变概率分布，设为 0 在工程实现中通常表示什么？](answers/inf/INF-015.md) `[项目]`
- [ ] [INF-016 · Top-K、Top-P、Min-P 和 Typical Sampling 有什么区别？](answers/inf/INF-016.md) `[项目]`
- [ ] [INF-017 · Repetition Penalty、Frequency Penalty 和 Presence Penalty 如何影响生成？](answers/inf/INF-017.md) `[项目]`
- [ ] [INF-018 · Beam Search 的长度惩罚、提前停止和 Beam Collapse 应如何处理？](answers/inf/INF-018.md) `[补充]`
- [ ] [INF-019 · Logits Processor、Logits Warper 和受约束解码分别在什么阶段工作？](answers/inf/INF-019.md) `[补充]`
- [ ] [INF-020 · 如何使用有限状态机或 Grammar 保证 JSON、SQL 等结构化输出合法？](answers/inf/INF-020.md) `[补充]`
- [ ] [INF-021 · Speculative Decoding 的 Draft、Verification、Acceptance 和 Residual Sampling 流程是什么？](answers/inf/INF-021.md) `[项目]`
- [ ] [INF-022 · 为什么正确实现的 Speculative Decoding 能保持与目标模型相同的输出分布？](answers/inf/INF-022.md) `[项目]`
- [ ] [INF-023 · Draft 模型大小、候选长度和接受率如何共同决定投机解码收益？](answers/inf/INF-023.md) `[补充]`
- [ ] [INF-024 · Medusa、EAGLE 等多 token 推测方法与双模型投机解码有什么区别？](answers/inf/INF-024.md) `[补充]`
- [ ] [INF-025 · Multi-Token Prediction 如何同时用于训练增强和推理解码？](answers/inf/INF-025.md) `[补充]`
- [ ] [INF-026 · TTFT、TPOT、ITL、吞吐量和端到端延迟分别如何定义？](answers/inf/INF-026.md) `[补充]`
- [ ] [INF-027 · 请求长度分布、并发数和显存容量如何影响服务吞吐？](answers/inf/INF-027.md) `[补充]`
- [ ] [INF-028 · 如何分析推理过程是 Compute-Bound 还是 Memory-Bound？](answers/inf/INF-028.md) `[补充]`
- [ ] [INF-029 · Roofline Model 如何用于解释 Prefill 和 Decode 的性能差异？](answers/inf/INF-029.md) `[补充]`
- [ ] [INF-030 · 长上下文推理中 Attention、KV Cache、带宽和调度分别会遇到什么瓶颈？](answers/inf/INF-030.md) `[补充]`
<a id="bank-1-section-6"></a>
### 量化、压缩与推理部署

- [ ] [DEP-001 · 模型量化的基本目标是什么，Weight、Activation 和 KV Cache 量化有何区别？](answers/dep/DEP-001.md) `[项目]`
- [ ] [DEP-002 · PTQ 与 QAT 的流程、成本和效果有何差异？](answers/dep/DEP-002.md) `[项目]`
- [ ] [DEP-003 · 对称量化与非对称量化、Per-Tensor 与 Per-Channel 量化如何选择？](answers/dep/DEP-003.md) `[补充]`
- [ ] [DEP-004 · Scale、Zero Point、Group Size 和 Calibration Data 分别如何影响量化误差？](answers/dep/DEP-004.md) `[补充]`
- [ ] [DEP-005 · GPTQ 的逐列量化与二阶信息如何降低误差？](answers/dep/DEP-005.md) `[项目]`
- [ ] [DEP-006 · AWQ 为什么根据激活识别显著权重通道？](answers/dep/DEP-006.md) `[项目]`
- [ ] [DEP-007 · GPTQ、AWQ、SmoothQuant 和 bitsandbytes 各适合什么场景？](answers/dep/DEP-007.md) `[项目]`
- [ ] [DEP-008 · SmoothQuant 如何在权重与激活之间迁移量化难度？](answers/dep/DEP-008.md) `[补充]`
- [ ] [DEP-009 · GGUF 是量化算法还是模型文件格式，它与 llama.cpp 是什么关系？](answers/dep/DEP-009.md) `[项目]`
- [ ] [DEP-010 · NF4、INT4、FP4 和 GPTQ 4-bit 在表示方式上有何区别？](answers/dep/DEP-010.md) `[补充]`
- [ ] [DEP-011 · 为什么权重量化到 4-bit 不一定带来理论上的 4 倍推理加速？](answers/dep/DEP-011.md) `[补充]`
- [ ] [DEP-012 · INT4 量化后精度明显下降时，可以从哪些方面恢复？](answers/dep/DEP-012.md) `[项目]`
- [ ] [DEP-013 · 模型蒸馏与模型量化解决的问题有何不同，能否组合使用？](answers/dep/DEP-013.md) `[项目]`
- [ ] [DEP-014 · Logits Distillation、Feature Distillation 和 Sequence-Level Distillation 有何区别？](answers/dep/DEP-014.md) `[补充]`
- [ ] [DEP-015 · 结构化剪枝、非结构化剪枝和稀疏化为什么不一定带来实际加速？](answers/dep/DEP-015.md) `[补充]`
- [ ] [DEP-016 · vLLM、TensorRT-LLM、SGLang、llama.cpp 和 DeepSpeed-Inference 如何选型？](answers/dep/DEP-016.md) `[项目]`
- [ ] [DEP-017 · Tensor Parallelism 与 Pipeline Parallelism 在推理中的通信模式有何不同？](answers/dep/DEP-017.md) `[项目]`
- [ ] [DEP-018 · Data Parallel、Expert Parallel 和 Context Parallel 如何用于大模型推理？](answers/dep/DEP-018.md) `[补充]`
- [ ] [DEP-019 · 模型服务中的 Replication、Sharding 和 Disaggregation 分别解决什么问题？](answers/dep/DEP-019.md) `[补充]`
- [ ] [DEP-020 · Prefill-Decode Disaggregation 的收益、成本和调度难点是什么？](answers/dep/DEP-020.md) `[补充]`
- [ ] [DEP-021 · 如何针对吞吐优先、延迟优先和成本优先三种目标选择部署方案？](answers/dep/DEP-021.md) `[补充]`
- [ ] [DEP-022 · GPU 利用率很低但显存占满时，应如何分析和优化？](answers/dep/DEP-022.md) `[补充]`
- [ ] [DEP-023 · CUDA Graph、Kernel Fusion 和算子编译如何降低推理开销？](answers/dep/DEP-023.md) `[补充]`
- [ ] [DEP-024 · 多模型、多 LoRA 和多租户共用 GPU 时如何隔离资源与保证公平性？](answers/dep/DEP-024.md) `[补充]`
- [ ] [DEP-025 · 如何进行推理服务容量规划、压测和成本核算？](answers/dep/DEP-025.md) `[补充]`
<a id="bank-1-section-7"></a>
### SFT 与参数高效微调

- [ ] [FT-001 · 预训练、Continued Pretraining、SFT 和偏好对齐的训练目标分别是什么？](answers/ft/FT-001.md) `[项目]`
- [ ] [FT-002 · 指令微调数据通常包含哪些字段，哪些 token 应计算损失？](answers/ft/FT-002.md) `[项目]`
- [ ] [FT-003 · 单轮与多轮对话数据应如何拼接和构造 Loss Mask？](answers/ft/FT-003.md) `[项目]`
- [ ] [FT-004 · Chat Template 不一致会对训练和推理产生什么影响？](answers/ft/FT-004.md) `[项目]`
- [ ] [FT-005 · 指令微调中数据质量、数量、多样性和难度如何权衡？](answers/ft/FT-005.md) `[项目]`
- [ ] [FT-006 · 人工标注、模型蒸馏、开源数据和 Self-Instruct 各有什么风险？](answers/ft/FT-006.md) `[项目]`
- [ ] [FT-007 · 全量微调、LoRA 和 QLoRA 应如何选择？](answers/ft/FT-007.md) `[项目]`
- [ ] [FT-008 · LoRA 的低秩假设是什么，前向计算与参数量如何推导？](answers/ft/FT-008.md) `[项目]`
- [ ] [FT-009 · LoRA 的 Rank、Alpha、Dropout 和 Target Modules 如何选择？](answers/ft/FT-009.md) `[项目]`
- [ ] [FT-010 · LoRA 应作用于 Q、K、V、O 还是 FFN，如何通过实验判断？](answers/ft/FT-010.md) `[项目]`
- [ ] [FT-011 · LoRA 的初始化为什么通常让一个低秩矩阵为零？](answers/ft/FT-011.md) `[补充]`
- [ ] [FT-012 · LoRA 合并进基础权重后是否完全没有推理开销，量化模型上有什么例外？](answers/ft/FT-012.md) `[补充]`
- [ ] [FT-013 · QLoRA 的 NF4、Double Quantization 和 Paged Optimizer 分别做什么？](answers/ft/FT-013.md) `[项目]`
- [ ] [FT-014 · QLoRA 为什么不是常规意义上的 QAT？](answers/ft/FT-014.md) `[补充]`
- [ ] [FT-015 · Adapter、Prefix Tuning、Prompt Tuning 和 LoRA 有何差异？](answers/ft/FT-015.md) `[项目]`
- [ ] [FT-016 · AdaLoRA、DoRA 和其他 LoRA 变体试图解决什么问题？](answers/ft/FT-016.md) `[补充]`
- [ ] [FT-017 · SFT 中的灾难性遗忘、过拟合和格式退化如何发现并缓解？](answers/ft/FT-017.md) `[项目]`
- [ ] [FT-018 · 如何构建 Train、Validation、Test 集并避免指令模板或语义泄漏？](answers/ft/FT-018.md) `[补充]`
- [ ] [FT-019 · 如何选择 SFT 的学习率、Epoch、Batch Size、序列长度和保存策略？](answers/ft/FT-019.md) `[补充]`
- [ ] [FT-020 · Function Calling、代码和长思考数据应如何设计 Loss Mask 与样本权重？](answers/ft/FT-020.md) `[补充]`
- [ ] [FT-021 · 多任务 SFT 中不同数据源如何混合，怎样避免某类任务主导训练？](answers/ft/FT-021.md) `[补充]`
- [ ] [FT-022 · 多个 LoRA Adapter 如何组合、路由、热切换和版本管理？](answers/ft/FT-022.md) `[补充]`
- [ ] [FT-023 · 如何判断微调是在注入知识、改变风格，还是学习新的任务能力？](answers/ft/FT-023.md) `[补充]`
- [ ] [FT-024 · 微调后通用能力下降时，应如何定位数据和训练配置问题？](answers/ft/FT-024.md) `[补充]`
- [ ] [FT-025 · 如何建立微调实验的可复现流程和效果归因体系？](answers/ft/FT-025.md) `[补充]`
<a id="bank-1-section-8"></a>
### RLHF、偏好优化与推理强化学习

- [ ] [ALN-001 · 经典 RLHF 的 SFT、Reward Model 和 Policy Optimization 三个阶段如何衔接？](answers/aln/ALN-001.md) `[项目]`
- [ ] [ALN-002 · Pairwise Preference Data 如何收集，Reward Model 的 Bradley-Terry 损失如何推导？](answers/aln/ALN-002.md) `[项目]`
- [ ] [ALN-003 · PPO 用于 LLM 对齐时 Actor、Critic、Reward Model 和 Reference Model 分别做什么？](answers/aln/ALN-003.md) `[项目]`
- [ ] [ALN-004 · PPO 的 Probability Ratio、Clipped Objective 和 Advantage 分别是什么？](answers/aln/ALN-004.md) `[项目]`
- [ ] [ALN-005 · GAE 如何估计优势，\(\gamma\) 和 \(\lambda\) 有什么作用？](answers/aln/ALN-005.md) `[项目]`
- [ ] [ALN-006 · PPO 中的 KL 惩罚为什么必要，固定 KL 与自适应 KL 如何选择？](answers/aln/ALN-006.md) `[项目]`
- [ ] [ALN-007 · LLM 的序列级奖励如何分配到 token 级训练目标？](answers/aln/ALN-007.md) `[补充]`
- [ ] [ALN-008 · Reward Hacking、Length Hacking 和 Format Hacking 如何发生？](answers/aln/ALN-008.md) `[补充]`
- [ ] [ALN-009 · PPO 训练不稳定时，应检查哪些数据、奖励、采样和优化指标？](answers/aln/ALN-009.md) `[补充]`
- [ ] [ALN-010 · DPO 如何从 KL 正则化的 RL 目标推导出直接偏好损失？](answers/aln/ALN-010.md) `[项目]`
- [ ] [ALN-011 · DPO 中 Reference Model 和 \(\beta\) 分别起什么作用？](answers/aln/ALN-011.md) `[项目]`
- [ ] [ALN-012 · DPO 与 PPO 在数据、计算成本、在线探索和稳定性上有何差异？](answers/aln/ALN-012.md) `[项目]`
- [ ] [ALN-013 · DPO 为什么可能出现过拟合偏好、概率质量下降或长度偏置？](answers/aln/ALN-013.md) `[补充]`
- [ ] [ALN-014 · IPO、KTO、ORPO、SimPO 和 CPO 分别对 DPO 做了什么改动？](answers/aln/ALN-014.md) `[补充]`
- [ ] [ALN-015 · GRPO 为什么不训练 Critic，它如何用组内奖励构造相对优势？](answers/aln/ALN-015.md) `[项目]`
- [ ] [ALN-016 · GRPO 的组大小如何影响方差、采样成本和可学习信号？](answers/aln/ALN-016.md) `[项目]`
- [ ] [ALN-017 · GRPO 与 PPO、REINFORCE 的目标和资源占用有何差异？](answers/aln/ALN-017.md) `[项目]`
- [ ] [ALN-018 · GRPO 中所有候选奖励相同或方差接近零时如何处理？](answers/aln/ALN-018.md) `[补充]`
- [ ] [ALN-019 · Outcome Reward 与 Process Reward 的监督粒度和适用任务有何不同？](answers/aln/ALN-019.md) `[补充]`
- [ ] [ALN-020 · PRM 如何收集步骤级标注并用于推理过程训练或搜索？](answers/aln/ALN-020.md) `[补充]`
- [ ] [ALN-021 · Verifiable Reward 适用于哪些任务，规则奖励有什么局限？](answers/aln/ALN-021.md) `[补充]`
- [ ] [ALN-022 · Function Calling 场景的奖励应如何覆盖格式、工具选择、参数和执行结果？](answers/aln/ALN-022.md) `[项目]`
- [ ] [ALN-023 · 多目标奖励中正确性、安全性、风格和成本如何标定与组合？](answers/aln/ALN-023.md) `[补充]`
- [ ] [ALN-024 · Reward Model 的校准、分布外泛化和不确定性应如何评估？](answers/aln/ALN-024.md) `[补充]`
- [ ] [ALN-025 · RLAIF、Constitutional AI 与人工反馈 RLHF 有何差异？](answers/aln/ALN-025.md) `[补充]`
- [ ] [ALN-026 · Online RL、Offline Preference Optimization 和 On-Policy Distillation 如何选择？](answers/aln/ALN-026.md) `[补充]`
- [ ] [ALN-027 · 推理模型为什么可能通过强化学习获得更长的思考过程？](answers/aln/ALN-027.md) `[补充]`
- [ ] [ALN-028 · 如何避免推理强化学习中的 Reward Hacking、无意义长思考和语言混杂？](answers/aln/ALN-028.md) `[补充]`
- [ ] [ALN-029 · DAPO 的核心改进分别解决 GRPO 训练中的哪些问题？](answers/aln/ALN-029.md) `[补充]`
- [ ] [ALN-030 · 如何设计一套可复现的数学或代码推理强化学习训练管线？](answers/aln/ALN-030.md) `[补充]`
<a id="bank-1-section-9"></a>
### RAG 与知识系统

- [ ] [RAG-001 · RAG 的离线索引和在线查询全链路分别包含哪些阶段？](answers/rag/RAG-001.md) `[项目]`
- [ ] [RAG-002 · RAG 与微调分别适合解决知识更新、风格适配和能力学习中的哪些问题？](answers/rag/RAG-002.md) `[项目]`
- [ ] [RAG-003 · PDF、网页、表格和扫描文档的解析与清洗难点分别是什么？](answers/rag/RAG-003.md) `[项目]`
- [ ] [RAG-004 · Fixed、Recursive、Semantic 和 Structure-Aware Chunking 如何选择？](answers/rag/RAG-004.md) `[项目]`
- [ ] [RAG-005 · Chunk Size 与 Overlap 如何影响召回率、上下文完整性、延迟和成本？](answers/rag/RAG-005.md) `[项目]`
- [ ] [RAG-006 · Parent-Child Chunk、Small-to-Big Retrieval 和 Late Chunking 分别解决什么问题？](answers/rag/RAG-006.md) `[补充]`
- [ ] [RAG-007 · Embedding 模型应从语言、领域、维度、长度和成本哪些方面选型？](answers/rag/RAG-007.md) `[项目]`
- [ ] [RAG-008 · Embedding 模型的训练目标、Pooling 和向量归一化会怎样影响检索？](answers/rag/RAG-008.md) `[补充]`
- [ ] [RAG-009 · 向量检索、BM25 和混合检索各自擅长哪些查询？](answers/rag/RAG-009.md) `[项目]`
- [ ] [RAG-010 · RRF 如何融合多路排序结果，参数应如何选择？](answers/rag/RAG-010.md) `[项目]`
- [ ] [RAG-011 · HNSW、IVF、PQ 和 Flat Index 的精度、内存与速度如何权衡？](answers/rag/RAG-011.md) `[补充]`
- [ ] [RAG-012 · Milvus、Weaviate、Chroma、Elasticsearch 和关系型数据库向量扩展如何选型？](answers/rag/RAG-012.md) `[项目]`
- [ ] [RAG-013 · HyDE、Multi-Query、Step-Back 和 Query Decomposition 分别适合什么查询？](answers/rag/RAG-013.md) `[项目]`
- [ ] [RAG-014 · 如何判断查询改写提升了召回，而不是引入了语义漂移？](answers/rag/RAG-014.md) `[补充]`
- [ ] [RAG-015 · Bi-Encoder 检索与 Cross-Encoder Reranking 的差别是什么？](answers/rag/RAG-015.md) `[项目]`
- [ ] [RAG-016 · Retrieval Top-K、Rerank Top-N 和最终上下文数量如何调优？](answers/rag/RAG-016.md) `[项目]`
- [ ] [RAG-017 · Lost in the Middle、上下文冲突和信息冗余如何缓解？](answers/rag/RAG-017.md) `[补充]`
- [ ] [RAG-018 · 如何让答案携带可验证的引用，并检测引用与原文是否一致？](answers/rag/RAG-018.md) `[补充]`
- [ ] [RAG-019 · Recall@K、MRR、NDCG、Context Precision 和 Faithfulness 分别评估什么？](answers/rag/RAG-019.md) `[项目]`
- [ ] [RAG-020 · 如何使用 RAGAS 或自建评测集评估端到端 RAG？](answers/rag/RAG-020.md) `[项目]`
- [ ] [RAG-021 · 没有标准答案时，如何构建 RAG 的评测集与负样本？](answers/rag/RAG-021.md) `[补充]`
- [ ] [RAG-022 · 如何区分检索失败、重排失败、上下文构造失败和生成失败？](answers/rag/RAG-022.md) `[补充]`
- [ ] [RAG-023 · Agentic RAG 如何决定是否检索、使用什么检索器以及何时停止？](answers/rag/RAG-023.md) `[项目]`
- [ ] [RAG-024 · Graph RAG 如何构建图、做社区摘要并处理多跳问题？](answers/rag/RAG-024.md) `[项目]`
- [ ] [RAG-025 · Knowledge Graph Retrieval 与普通向量 RAG 应如何组合？](answers/rag/RAG-025.md) `[补充]`
- [ ] [RAG-026 · 多租户 RAG 如何实现权限过滤、数据隔离和审计？](answers/rag/RAG-026.md) `[补充]`
- [ ] [RAG-027 · 文档新增、更新和删除后，索引如何增量刷新并保持一致性？](answers/rag/RAG-027.md) `[补充]`
- [ ] [RAG-028 · RAG 系统如何抵御文档中的 Prompt Injection 与数据投毒？](answers/rag/RAG-028.md) `[补充]`
- [ ] [RAG-029 · 如何缓存 Embedding、检索结果和最终回答而不返回过期知识？](answers/rag/RAG-029.md) `[补充]`
- [ ] [RAG-030 · 企业级 RAG 上线后应监控哪些质量、延迟、成本和安全指标？](answers/rag/RAG-030.md) `[补充]`
<a id="bank-1-section-10"></a>
### Agent 与工具调用

- [ ] [AGT-001 · LLM Agent 的模型、规划、工具、记忆和执行环境分别承担什么职责？](answers/agt/AGT-001.md) `[项目]`
- [ ] [AGT-002 · ReAct 如何交替进行推理与行动，它与 CoT、Act-Only 有何差异？](answers/agt/AGT-002.md) `[项目]`
- [ ] [AGT-003 · Plan-and-Execute、ReWOO、Tree of Thoughts 与 ReAct 各适合什么任务？](answers/agt/AGT-003.md) `[补充]`
- [ ] [AGT-004 · Agent 应在什么条件下制定计划、重规划或直接执行？](answers/agt/AGT-004.md) `[补充]`
- [ ] [AGT-005 · Function Calling 的工具定义、模型决策、执行和结果回传流程是什么？](answers/agt/AGT-005.md) `[项目]`
- [ ] [AGT-006 · 如何编写高质量的工具名称、Description 和 JSON Schema？](answers/agt/AGT-006.md) `[补充]`
- [ ] [AGT-007 · 多个相似工具导致误选时，应如何优化工具设计和路由？](answers/agt/AGT-007.md) `[补充]`
- [ ] [AGT-008 · 工具参数缺失、类型错误或语义冲突时，Agent 应如何澄清与修复？](answers/agt/AGT-008.md) `[补充]`
- [ ] [AGT-009 · 串行、并行和依赖图式工具调用分别如何调度？](answers/agt/AGT-009.md) `[补充]`
- [ ] [AGT-010 · 工具调用如何实现超时、重试、幂等、熔断和降级？](answers/agt/AGT-010.md) `[补充]`
- [ ] [AGT-011 · 如何验证工具输出，避免把错误结果继续传播给后续步骤？](answers/agt/AGT-011.md) `[补充]`
- [ ] [AGT-012 · 涉及支付、删除、发信等高风险操作时，如何设计确认和权限边界？](answers/agt/AGT-012.md) `[补充]`
- [ ] [AGT-013 · MCP 的 Host、Client、Server 分别是什么，它提供哪些核心能力？](answers/agt/AGT-013.md) `[项目]`
- [ ] [AGT-014 · MCP 与模型原生 Function Calling 处于什么层级，二者如何协作？](answers/agt/AGT-014.md) `[项目]`
- [ ] [AGT-015 · MCP 的 Tools、Resources 和 Prompts 有什么区别？](answers/agt/AGT-015.md) `[项目]`
- [ ] [AGT-016 · MCP 的能力发现、生命周期、传输和错误处理如何工作？](answers/agt/AGT-016.md) `[补充]`
- [ ] [AGT-017 · 连接不可信 MCP Server 时有哪些安全风险和隔离措施？](answers/agt/AGT-017.md) `[补充]`
- [ ] [AGT-018 · Agent 的工作记忆、短期记忆、长期记忆和外部知识如何划分？](answers/agt/AGT-018.md) `[项目]`
- [ ] [AGT-019 · 记忆的写入、检索、更新、合并和遗忘策略应如何设计？](answers/agt/AGT-019.md) `[项目]`
- [ ] [AGT-020 · 如何区分用户偏好、事实记忆、情景记忆和任务状态？](answers/agt/AGT-020.md) `[补充]`
- [ ] [AGT-021 · Agent 记忆出现冲突、过期或错误时如何纠正？](answers/agt/AGT-021.md) `[补充]`
- [ ] [AGT-022 · 如何评估记忆系统的召回质量、时效性和隐私风险？](answers/agt/AGT-022.md) `[补充]`
- [ ] [AGT-023 · Leader-Worker、Peer-to-Peer 和层级式多 Agent 架构有何优缺点？](answers/agt/AGT-023.md) `[项目]`
- [ ] [AGT-024 · 多 Agent 如何通过投票、辩论、仲裁或置信度解决冲突？](answers/agt/AGT-024.md) `[项目]`
- [ ] [AGT-025 · 什么时候多 Agent 优于单 Agent，如何证明收益覆盖了额外成本？](answers/agt/AGT-025.md) `[补充]`
- [ ] [AGT-026 · 多 Agent 系统如何共享上下文、避免重复工作并处理部分失败？](answers/agt/AGT-026.md) `[补充]`
- [ ] [AGT-027 · Agent 的状态机、事件循环和有向图编排分别适合什么复杂度？](answers/agt/AGT-027.md) `[补充]`
- [ ] [AGT-028 · LangChain、LangGraph、AutoGen、CrewAI、Dify 和 Coze 的定位有何不同？](answers/agt/AGT-028.md) `[项目]`
- [ ] [AGT-029 · 如何避免 Agent 陷入循环、无限重试或持续无效调用？](answers/agt/AGT-029.md) `[补充]`
- [ ] [AGT-030 · Agent 的停止条件、最大步数和预算应如何设计？](answers/agt/AGT-030.md) `[补充]`
- [ ] [AGT-031 · Browser、代码执行和文件系统工具分别需要哪些沙箱机制？](answers/agt/AGT-031.md) `[补充]`
- [ ] [AGT-032 · Human-in-the-Loop 应插入 Agent 工作流的哪些位置？](answers/agt/AGT-032.md) `[补充]`
- [ ] [AGT-033 · 如何记录 Agent 的 Trace，并从 Trace 中定位规划或工具错误？](answers/agt/AGT-033.md) `[补充]`
- [ ] [AGT-034 · 如何为 Agent 构建任务成功率、步骤效率、工具正确率和成本评测？](answers/agt/AGT-034.md) `[补充]`
- [ ] [AGT-035 · 如何设计一个能够中断、恢复和持久化长任务的 Agent Runtime？](answers/agt/AGT-035.md) `[补充]`
- [ ] [AGT-036 · 什么是 Agent Harness，它与基础模型、Agent Framework 和 Agent Runtime 的边界分别是什么？](answers/agt/AGT-036.md) `[补充]`
- [ ] [AGT-037 · Agent 的最终效果为什么不仅取决于模型能力，Harness 会通过哪些机制放大或限制模型能力？](answers/agt/AGT-037.md) `[补充]`
- [ ] [AGT-038 · 如何设计稳定的 Observation、Action、Tool Result 和 Feedback 协议，使模型与执行环境解耦？](answers/agt/AGT-038.md) `[补充]`
- [ ] [AGT-039 · 工具返回内容应如何完成裁剪、结构化、去噪、校验和错误分类后再写入模型上下文？](answers/agt/AGT-039.md) `[补充]`
- [ ] [AGT-040 · Context Engineering 与 Prompt Engineering 有什么区别，前者通常覆盖哪些系统组件？](answers/agt/AGT-040.md) `[补充]`
- [ ] [AGT-041 · System Prompt、用户目标、任务状态、工具定义、检索内容、记忆和执行反馈应按照什么原则组织进上下文？](answers/agt/AGT-041.md) `[补充]`
- [ ] [AGT-042 · 在上下文窗口受限时，如何在任务指令、历史轨迹、工具结果、检索证据和输出预算之间分配 token？](answers/agt/AGT-042.md) `[补充]`
- [ ] [AGT-043 · 如何压缩或总结长轨迹，同时避免丢失约束、未完成事项、关键实体和可恢复状态？](answers/agt/AGT-043.md) `[补充]`
- [ ] [AGT-044 · Context Rot、Lost in the Middle、指令冲突和历史污染分别如何影响 Agent，应该如何缓解？](answers/agt/AGT-044.md) `[补充]`
- [ ] [AGT-045 · Agent 上下文缓存应如何设计命中键、版本绑定、失效条件和隐私隔离？](answers/agt/AGT-045.md) `[补充]`
- [ ] [AGT-046 · 为什么任务状态不应只存在于对话文本中，如何建立外部状态存储与 Single Source of Truth？](answers/agt/AGT-046.md) `[补充]`
- [ ] [AGT-047 · 如何为系统指令、用户输入、检索文档、网页内容和工具结果建立信任分层，防止间接 Prompt Injection 污染上下文？](answers/agt/AGT-047.md) `[补充]`
- [ ] [AGT-048 · 如何从 Agent Trace 构造 SFT、偏好学习或强化学习数据，成功轨迹和失败轨迹分别有什么价值？](answers/agt/AGT-048.md) `[补充]`
- [ ] [AGT-049 · 如何观测每一步实际发送给模型的上下文，并定位截断、顺序、模板、状态同步和工具结果注入问题？](answers/agt/AGT-049.md) `[补充]`
- [ ] [AGT-050 · 如何在固定基础模型或替换基础模型的条件下，独立评估 Agent Harness 的规划、恢复、工具使用和上下文管理能力？](answers/agt/AGT-050.md) `[补充]`
<a id="bank-1-section-11"></a>
### 评估、安全与可观测性

- [ ] [EVA-001 · LLM 的知识、推理、代码、指令遵循、长文本和对话能力应如何分别评估？](answers/eva/EVA-001.md) `[项目]`
- [ ] [EVA-002 · 自动 Benchmark、人工评测、LLM-as-Judge 和竞技场评测有何优缺点？](answers/eva/EVA-002.md) `[项目]`
- [ ] [EVA-003 · LLM-as-Judge 的位置、长度、自我偏好和风格偏差如何控制？](answers/eva/EVA-003.md) `[项目]`
- [ ] [EVA-004 · Pointwise、Pairwise、Listwise 和 Reference-Based 评测如何选择？](answers/eva/EVA-004.md) `[补充]`
- [ ] [EVA-005 · 如何校准 Judge，并测量其与人工标注的一致性？](answers/eva/EVA-005.md) `[补充]`
- [ ] [EVA-006 · Pass@k、Exact Match、F1、BLEU、ROUGE 和语义相似度分别适合什么任务？](answers/eva/EVA-006.md) `[补充]`
- [ ] [EVA-007 · 如何防止模型针对公开 Benchmark 过拟合或数据污染？](answers/eva/EVA-007.md) `[补充]`
- [ ] [EVA-008 · 离线评测提升为什么可能无法转化为线上业务提升？](answers/eva/EVA-008.md) `[补充]`
- [ ] [EVA-009 · 如何设计大模型线上 A/B 实验并处理非确定性输出？](answers/eva/EVA-009.md) `[补充]`
- [ ] [EVA-010 · 如何对 Prompt、模型、采样参数、检索器和工具版本做回归测试？](answers/eva/EVA-010.md) `[补充]`
- [ ] [EVA-011 · 事实性幻觉、忠实度幻觉和指令不遵循如何区分？](answers/eva/EVA-011.md) `[项目]`
- [ ] [EVA-012 · RAG、微调、验证器、自洽性和拒答机制分别能缓解哪些幻觉？](answers/eva/EVA-012.md) `[项目]`
- [ ] [EVA-013 · 模型置信度为什么不等于生成概率，如何做不确定性估计与校准？](answers/eva/EVA-013.md) `[补充]`
- [ ] [EVA-014 · 越狱、Prompt Injection、数据泄漏、有害输出和偏见有什么区别？](answers/eva/EVA-014.md) `[项目]`
- [ ] [EVA-015 · 角色扮演、多轮诱导、编码绕过和对抗后缀等越狱方式如何评估？](answers/eva/EVA-015.md) `[项目]`
- [ ] [EVA-016 · 输入过滤、模型对齐、工具隔离、输出审核和人工复核如何组成纵深防御？](answers/eva/EVA-016.md) `[项目]`
- [ ] [EVA-017 · 直接 Prompt Injection 与间接 Prompt Injection 有何差异？](answers/eva/EVA-017.md) `[补充]`
- [ ] [EVA-018 · System Prompt 为什么不能被视为真正的安全边界？](answers/eva/EVA-018.md) `[补充]`
- [ ] [EVA-019 · 如何防止工具调用中的权限提升、参数注入和 Confused Deputy 问题？](answers/eva/EVA-019.md) `[补充]`
- [ ] [EVA-020 · Red Teaming 的威胁建模、测试集构建、执行和复测流程是什么？](answers/eva/EVA-020.md) `[补充]`
- [ ] [EVA-021 · 如何衡量模型在不同人群、语言和文化上的公平性与偏见？](answers/eva/EVA-021.md) `[补充]`
- [ ] [EVA-022 · 训练数据记忆与隐私泄漏如何检测，差分隐私有什么代价？](answers/eva/EVA-022.md) `[补充]`
- [ ] [EVA-023 · 内容安全分类器的 Precision、Recall 和拒答率如何权衡？](answers/eva/EVA-023.md) `[补充]`
- [ ] [EVA-024 · 如何防止安全对齐导致过度拒答，并评估模型的安全有用性平衡？](answers/eva/EVA-024.md) `[补充]`
- [ ] [EVA-025 · 大模型应用应记录哪些日志，如何兼顾可观测性与隐私？](answers/eva/EVA-025.md) `[补充]`
- [ ] [EVA-026 · 如何监控输入分布漂移、输出质量漂移和成本异常？](answers/eva/EVA-026.md) `[补充]`
- [ ] [EVA-027 · Trace、Metric 和 Log 在 LLM 应用可观测性中的分工是什么？](answers/eva/EVA-027.md) `[补充]`
- [ ] [EVA-028 · 如何建立线上 Bad Case 收集、聚类、归因和闭环修复流程？](answers/eva/EVA-028.md) `[补充]`
- [ ] [EVA-029 · 模型升级时如何制定兼容性、灰度发布和回滚策略？](answers/eva/EVA-029.md) `[补充]`
- [ ] [EVA-030 · 如何为生成式 AI 系统建立风险分级和发布门禁？](answers/eva/EVA-030.md) `[补充]`
<a id="bank-1-section-12"></a>
### MoE、推理模型与前沿方向

- [ ] [HOT-001 · MoE 如何通过 Router 为每个 token 选择 Top-K 专家？](answers/hot/HOT-001.md) `[项目]`
- [ ] [HOT-002 · MoE 的总参数量、激活参数量和单 token FLOPs 应如何区分？](answers/hot/HOT-002.md) `[项目]`
- [ ] [HOT-003 · MoE 的负载不均衡和专家坍缩为什么会发生？](answers/hot/HOT-003.md) `[项目]`
- [ ] [HOT-004 · Auxiliary Load-Balancing Loss 如何计算，它可能带来什么副作用？](answers/hot/HOT-004.md) `[项目]`
- [ ] [HOT-005 · Auxiliary-Loss-Free Load Balancing 的基本思路是什么？](answers/hot/HOT-005.md) `[补充]`
- [ ] [HOT-006 · Expert Parallelism 为什么会产生 All-to-All 通信瓶颈？](answers/hot/HOT-006.md) `[项目]`
- [ ] [HOT-007 · Expert Capacity、Token Dropping 和 Dropless MoE 有何区别？](answers/hot/HOT-007.md) `[补充]`
- [ ] [HOT-008 · Shared Expert 与 Routed Expert 为什么可以同时使用？](answers/hot/HOT-008.md) `[项目]`
- [ ] [HOT-009 · DeepSeekMoE 的细粒度专家划分试图解决什么问题？](answers/hot/HOT-009.md) `[项目]`
- [ ] [HOT-010 · MLA 如何压缩 KV 表示，它与 GQA 的精度和部署权衡是什么？](answers/hot/HOT-010.md) `[项目]`
- [ ] [HOT-011 · DeepSeek-V3 的 MoE、MLA、FP8 和 Multi-Token Prediction 分别解决什么问题？](answers/hot/HOT-011.md) `[项目]`
- [ ] [HOT-012 · DeepSeek-R1 的强化学习训练路线和能力涌现应如何理解？](answers/hot/HOT-012.md) `[项目]`
- [ ] [HOT-013 · Test-Time Compute 包含哪些策略，为什么能提升复杂推理能力？](answers/hot/HOT-013.md) `[项目]`
- [ ] [HOT-014 · Best-of-N、Self-Consistency、搜索和长思考的收益与成本有何不同？](answers/hot/HOT-014.md) `[项目]`
- [ ] [HOT-015 · Test-Time Scaling 的性能上限受模型、验证器和搜索空间哪些因素限制？](answers/hot/HOT-015.md) `[补充]`
- [ ] [HOT-016 · 推理模型的可见 Chain-of-Thought 是否等于模型真实的内部推理过程？](answers/hot/HOT-016.md) `[补充]`
- [ ] [HOT-017 · 为什么不应把完整 Chain-of-Thought 作为所有应用的默认输出？](answers/hot/HOT-017.md) `[补充]`
- [ ] [HOT-018 · 长上下文可以从位置编码、训练数据、注意力机制和系统并行哪些层面扩展？](answers/hot/HOT-018.md) `[项目]`
- [ ] [HOT-019 · Context Length、Effective Context Length 和 Needle-in-a-Haystack 成绩有何区别？](answers/hot/HOT-019.md) `[补充]`
- [ ] [HOT-020 · Ring Attention、Context Parallel 和序列并行如何支持超长上下文？](answers/hot/HOT-020.md) `[补充]`
- [ ] [HOT-021 · State Space Model 与 Transformer 在长序列建模上的差异是什么？](answers/hot/HOT-021.md) `[补充]`
- [ ] [HOT-022 · Model Soup、Task Arithmetic、TIES-Merging 和 DARE 等模型合并方法有哪些适用条件？](answers/hot/HOT-022.md) `[补充]`
- [ ] [HOT-023 · 小模型的蒸馏、端侧部署和混合云推理有哪些关键挑战？](answers/hot/HOT-023.md) `[补充]`
- [ ] [HOT-024 · World Model 的目标是什么，它与语言模型或多模态模型有什么关系？](answers/hot/HOT-024.md) `[项目]`
- [ ] [HOT-025 · 合成数据闭环为什么可能导致 Model Collapse，如何缓解？](answers/hot/HOT-025.md) `[补充]`
<a id="bank-1-section-13"></a>
### 多模态大模型

- [ ] [MM-001 · 典型 Vision-Language Model 的 Vision Encoder、Projector 和 LLM 如何连接？](answers/mm/MM-001.md) `[项目]`
- [ ] [MM-002 · CLIP 的对比学习目标是什么，它为什么适合视觉语言对齐？](answers/mm/MM-002.md) `[补充]`
- [ ] [MM-003 · ViT 如何把图像转换成 token，Patch Size 会带来什么影响？](answers/mm/MM-003.md) `[补充]`
- [ ] [MM-004 · Linear Projector、MLP Projector、Q-Former 和 Cross-Attention Connector 有何不同？](answers/mm/MM-004.md) `[补充]`
- [ ] [MM-005 · 多模态预训练、对齐预训练和指令微调分别需要什么数据？](answers/mm/MM-005.md) `[补充]`
- [ ] [MM-006 · 图像分辨率、动态切图和视觉 token 数如何影响效果与成本？](answers/mm/MM-006.md) `[补充]`
- [ ] [MM-007 · AnyRes、Image Tiling 和 Naive Dynamic Resolution 分别解决什么问题？](answers/mm/MM-007.md) `[补充]`
- [ ] [MM-008 · 多图、视频和长文档输入如何组织位置与时间信息？](answers/mm/MM-008.md) `[补充]`
- [ ] [MM-009 · OCR、图表、文档理解和自然图像问答对模型能力要求有何不同？](answers/mm/MM-009.md) `[补充]`
- [ ] [MM-010 · 多模态模型中的视觉幻觉如何定义和评估？](answers/mm/MM-010.md) `[补充]`
- [ ] [MM-011 · 图文对齐数据中的噪声、错配和重复应如何清洗？](answers/mm/MM-011.md) `[补充]`
- [ ] [MM-012 · 多模态模型如何进行 Grounding、Bounding Box 和 Point Prediction？](answers/mm/MM-012.md) `[补充]`
- [ ] [MM-013 · Early Fusion、Late Fusion 与统一 Token 建模有何差异？](answers/mm/MM-013.md) `[补充]`
- [ ] [MM-014 · 图像生成模型中的 Autoregressive、VAE、GAN 和 Diffusion 路线有何区别？](answers/mm/MM-014.md) `[补充]`
- [ ] [MM-015 · Diffusion Model 的前向加噪、反向去噪和训练目标是什么？](answers/mm/MM-015.md) `[补充]`
- [ ] [MM-016 · 文生图系统如何理解 CFG、Sampler、Steps 和 Negative Prompt？](answers/mm/MM-016.md) `[补充]`
- [ ] [MM-017 · 语音多模态模型如何表示音频，并处理流式输入和低延迟输出？](answers/mm/MM-017.md) `[补充]`
- [ ] [MM-018 · 视频模型如何处理帧采样、时序建模和超长 token 序列？](answers/mm/MM-018.md) `[补充]`
- [ ] [MM-019 · 多模态模型的安全风险与纯文本模型相比有哪些新增部分？](answers/mm/MM-019.md) `[补充]`
- [ ] [MM-020 · 如何设计一套覆盖感知、推理、OCR、Grounding 和幻觉的多模态评测？](answers/mm/MM-020.md) `[补充]`
<a id="bank-1-section-14"></a>
### 分布式训练与 AI Infra

- [ ] [DIS-001 · Data Parallel、Tensor Parallel、Pipeline Parallel、Sequence Parallel 和 Expert Parallel 分别切分什么？](answers/dis/DIS-001.md) `[项目]`
- [ ] [DIS-002 · 如何根据模型大小、节点拓扑和序列长度组合多种并行策略？](answers/dis/DIS-002.md) `[项目]`
- [ ] [DIS-003 · Tensor Parallel 中 Column Parallel 与 Row Parallel Linear 如何通信？](answers/dis/DIS-003.md) `[项目]`
- [ ] [DIS-004 · Pipeline Parallel 为什么会产生 Bubble，如何通过 Micro-Batch 和调度减少？](answers/dis/DIS-004.md) `[项目]`
- [ ] [DIS-005 · ZeRO-1、ZeRO-2 和 ZeRO-3 分别切分哪些训练状态？](answers/dis/DIS-005.md) `[项目]`
- [ ] [DIS-006 · ZeRO 与 FSDP 的概念和工程实现有何异同？](answers/dis/DIS-006.md) `[补充]`
- [ ] [DIS-007 · All-Reduce、Reduce-Scatter、All-Gather 和 All-to-All 分别用于哪些并行方式？](answers/dis/DIS-007.md) `[补充]`
- [ ] [DIS-008 · Ring All-Reduce 的通信过程和数据量如何计算？](answers/dis/DIS-008.md) `[项目]`
- [ ] [DIS-009 · NVLink、NVSwitch、PCIe、InfiniBand 和 RoCE 如何影响并行策略？](answers/dis/DIS-009.md) `[补充]`
- [ ] [DIS-010 · 通信与计算如何重叠，Bucket Size 和异步 Collective 有什么作用？](answers/dis/DIS-010.md) `[补充]`
- [ ] [DIS-011 · Sequence Parallel、Context Parallel 和 Ring Attention 有何区别？](answers/dis/DIS-011.md) `[补充]`
- [ ] [DIS-012 · 梯度累积如何实现，它与 Pipeline Micro-Batch 是什么关系？](answers/dis/DIS-012.md) `[项目]`
- [ ] [DIS-013 · 大模型训练显存应如何拆分为参数、梯度、优化器状态和激活？](answers/dis/DIS-013.md) `[补充]`
- [ ] [DIS-014 · Activation Recomputation、CPU Offload 和 NVMe Offload 的收益与瓶颈是什么？](answers/dis/DIS-014.md) `[补充]`
- [ ] [DIS-015 · 分布式训练出现 Straggler、Hang 或 NCCL Timeout 时如何排查？](answers/dis/DIS-015.md) `[补充]`
- [ ] [DIS-016 · 如何设计容错 Checkpoint，并控制大规模保存对训练吞吐的影响？](answers/dis/DIS-016.md) `[补充]`
- [ ] [DIS-017 · 弹性训练如何处理节点加入、退出和数据进度一致性？](answers/dis/DIS-017.md) `[补充]`
- [ ] [DIS-018 · 如何对 GPU Kernel 做访存合并、Tiling、并行归约和 Kernel Fusion？](answers/dis/DIS-018.md) `[补充]`
- [ ] [DIS-019 · CUDA Kernel 优化中 Occupancy、Register、Shared Memory 和 Memory Coalescing 分别意味着什么？](answers/dis/DIS-019.md) `[项目]`
- [ ] [DIS-020 · 如何使用 Profiler 定位 Data Loader、CPU、通信、Kernel 和同步瓶颈？](answers/dis/DIS-020.md) `[补充]`
- [ ] [DIS-021 · 大规模训练中如何保证数据顺序、随机性和断点恢复的一致性？](answers/dis/DIS-021.md) `[补充]`
- [ ] [DIS-022 · 如何计算一次分布式训练任务的理论吞吐、实际吞吐和 MFU？](answers/dis/DIS-022.md) `[补充]`
- [ ] [DIS-023 · 训练集群调度如何处理 Gang Scheduling、抢占、配额和碎片？](answers/dis/DIS-023.md) `[补充]`
- [ ] [DIS-024 · 如何设计模型、数据、代码和环境的版本管理与实验追踪？](answers/dis/DIS-024.md) `[补充]`
- [ ] [DIS-025 · 训练成本异常升高时，应从算力利用率、通信、数据和容错哪些方面排查？](answers/dis/DIS-025.md) `[补充]`
<a id="bank-1-section-15"></a>
### 手写代码与算法

- [ ] [COD-001 · 使用 PyTorch 手写支持 Mask 的 Scaled Dot-Product Self-Attention。](answers/cod/COD-001.md) `[项目]`
- [ ] [COD-002 · 使用 PyTorch 手写 Multi-Head Attention，并正确处理张量形状。](answers/cod/COD-002.md) `[项目]`
- [ ] [COD-003 · 手写支持 Cross-Attention、Padding Mask 和 Causal Mask 的注意力层。](answers/cod/COD-003.md) `[补充]`
- [ ] [COD-004 · 手写 MQA 或 GQA，并说明 KV 头的广播方式。](answers/cod/COD-004.md) `[项目]`
- [ ] [COD-005 · 手写带 Prefill、增量 Decode 和清理能力的 KV Cache Attention。](answers/cod/COD-005.md) `[项目]`
- [ ] [COD-006 · 手写数值稳定的 Online Softmax。](answers/cod/COD-006.md) `[补充]`
- [ ] [COD-007 · 手写 RoPE 的频率预计算与旋转应用函数。](answers/cod/COD-007.md) `[项目]`
- [ ] [COD-008 · 手写一个 LoRA Linear Layer，并支持合并与取消合并权重。](answers/cod/COD-008.md) `[项目]`
- [ ] [COD-009 · 手写 BPE 的训练与编码过程，并正确处理词边界。](answers/cod/COD-009.md) `[项目]`
- [ ] [COD-010 · 手写 Greedy Search、Top-K 与 Top-P Sampling。](answers/cod/COD-010.md) `[项目]`
- [ ] [COD-011 · 手写带长度惩罚和提前停止的 Beam Search。](answers/cod/COD-011.md) `[项目]`
- [ ] [COD-012 · 手写 Repetition、Frequency 和 Presence Penalty 的 Logits Processor。](answers/cod/COD-012.md) `[补充]`
- [ ] [COD-013 · 手写 Speculative Decoding 的候选验证与接受拒绝过程。](answers/cod/COD-013.md) `[补充]`
- [ ] [COD-014 · 手写批量余弦相似度检索并返回 Top-K 文档。](answers/cod/COD-014.md) `[项目]`
- [ ] [COD-015 · 手写 BM25，并解释 IDF、文档长度归一化和参数作用。](answers/cod/COD-015.md) `[补充]`
- [ ] [COD-016 · 手写 Reciprocal Rank Fusion 合并多路检索结果。](answers/cod/COD-016.md) `[补充]`
- [ ] [COD-017 · 手写 LayerNorm 与 RMSNorm，并验证和框架实现的一致性。](answers/cod/COD-017.md) `[补充]`
- [ ] [COD-018 · 手写 SwiGLU FFN，并计算其参数量。](answers/cod/COD-018.md) `[补充]`
- [ ] [COD-019 · 编写函数估算 Transformer 的参数量、训练 FLOPs 和推理 FLOPs。](answers/cod/COD-019.md) `[项目]`
- [ ] [COD-020 · 编写函数计算不同模型配置下的权重、激活和 KV Cache 显存。](answers/cod/COD-020.md) `[补充]`
- [ ] [COD-021 · 实现 LRU Cache，并分析时间与空间复杂度。](answers/cod/COD-021.md) `[项目]`
- [ ] [COD-022 · 使用堆或 Quickselect 解决 Top-K 问题。](answers/cod/COD-022.md) `[项目]`
- [ ] [COD-023 · 合并 K 个有序链表，并比较不同解法复杂度。](answers/cod/COD-023.md) `[项目]`
- [ ] [COD-024 · 实现二叉树层序遍历。](answers/cod/COD-024.md) `[项目]`
- [ ] [COD-025 · 实现最长公共子序列并优化空间复杂度。](answers/cod/COD-025.md) `[项目]`
- [ ] [COD-026 · 实现岛屿数量问题并比较 DFS、BFS 和并查集。](answers/cod/COD-026.md) `[项目]`
- [ ] [COD-027 · 手写快速排序和归并排序，并讨论稳定性与最坏复杂度。](answers/cod/COD-027.md) `[项目]`
- [ ] [COD-028 · 实现滑动窗口最大值并说明单调队列原理。](answers/cod/COD-028.md) `[项目]`
- [ ] [COD-029 · 实现一个线程安全或异步的限流器。](answers/cod/COD-029.md) `[补充]`
- [ ] [COD-030 · 解析流式模型输出，并正确处理增量 UTF-8、JSON 和取消请求。](answers/cod/COD-030.md) `[补充]`
<a id="bank-1-section-16"></a>
### 系统设计与场景题

- [ ] [SYS-001 · 设计一个支持高并发、流式输出和多模型路由的大模型推理服务。](answers/sys/SYS-001.md) `[项目]`
- [ ] [SYS-002 · 如何在推理服务中同时优化高并发、低延迟、高可用和低成本？](answers/sys/SYS-002.md) `[项目]`
- [ ] [SYS-003 · 设计一个同时支持在线请求与离线批处理的统一推理平台。](answers/sys/SYS-003.md) `[补充]`
- [ ] [SYS-004 · 设计一个具有优先级、配额、公平性和取消能力的请求调度器。](answers/sys/SYS-004.md) `[补充]`
- [ ] [SYS-005 · 设计一个支持多模型、多 LoRA 和灰度版本的模型网关。](answers/sys/SYS-005.md) `[补充]`
- [ ] [SYS-006 · 设计一个跨地域部署、故障切换和流量回放的大模型服务。](answers/sys/SYS-006.md) `[补充]`
- [ ] [SYS-007 · 设计一个企业级 RAG 系统，覆盖索引、查询、权限、引用和评估。](answers/sys/SYS-007.md) `[项目]`
- [ ] [SYS-008 · 设计一个支持亿级文档、增量更新和混合检索的知识库。](answers/sys/SYS-008.md) `[补充]`
- [ ] [SYS-009 · 设计一个面向客服场景、能够引用来源并转人工的问答系统。](answers/sys/SYS-009.md) `[补充]`
- [ ] [SYS-010 · 设计一个能够处理表格、图片和扫描 PDF 的多模态文档问答系统。](answers/sys/SYS-010.md) `[补充]`
- [ ] [SYS-011 · 设计一个可靠 Agent 系统，覆盖规划、工具、状态、重试、沙箱和观测。](answers/sys/SYS-011.md) `[项目]`
- [ ] [SYS-012 · 设计一个具有长期记忆的多轮对话 Agent。](answers/sys/SYS-012.md) `[项目]`
- [ ] [SYS-013 · 设计一个多 Agent 协作系统，并说明任务分解和冲突处理机制。](answers/sys/SYS-013.md) `[项目]`
- [ ] [SYS-014 · 设计一个能够执行数小时任务、支持中断恢复和人工审批的 Agent。](answers/sys/SYS-014.md) `[补充]`
- [ ] [SYS-015 · 设计一个安全的代码生成与执行 Agent。](answers/sys/SYS-015.md) `[补充]`
- [ ] [SYS-016 · 设计一个企业内部 MCP 工具平台，覆盖注册、权限、审计和版本治理。](answers/sys/SYS-016.md) `[补充]`
- [ ] [SYS-017 · 设计一个大模型分布式训练系统，并选择合适的并行策略。](answers/sys/SYS-017.md) `[项目]`
- [ ] [SYS-018 · 设计一个训练数据生产平台，覆盖采集、清洗、去重、质量和版本管理。](answers/sys/SYS-018.md) `[补充]`
- [ ] [SYS-019 · 设计一个 SFT、偏好优化和评测一体化的平台。](answers/sys/SYS-019.md) `[补充]`
- [ ] [SYS-020 · 设计一个 LLM-as-Judge 评测平台，并控制偏差、成本和可复现性。](answers/sys/SYS-020.md) `[补充]`
- [ ] [SYS-021 · 设计一个模型安全网关，处理越狱、Prompt Injection、敏感数据和过度拒答。](answers/sys/SYS-021.md) `[补充]`
- [ ] [SYS-022 · 设计一个线上 Bad Case 发现、聚类、标注和回归闭环系统。](answers/sys/SYS-022.md) `[补充]`
- [ ] [SYS-023 · 设计一个文本到 SQL 系统，并处理 Schema 检索、执行验证和安全限制。](answers/sys/SYS-023.md) `[补充]`
- [ ] [SYS-024 · 设计一个教育 AI 系统，为学生生成个性化学习路径并控制错误知识风险。](answers/sys/SYS-024.md) `[项目]`
- [ ] [SYS-025 · 在 GPU 数量固定的情况下，如何为业务制定模型质量、延迟、吞吐和成本的容量方案？](answers/sys/SYS-025.md) `[补充]`

<a id="bank-2"></a>
## LLM 与 Agent 岗位工程基础补丁题库

题目来源：[ENGINEERING_FOUNDATIONS_PATCH.md](ENGINEERING_FOUNDATIONS_PATCH.md)

<a id="bank-2-section-1"></a>
### Python 语言与运行时

- [ ] [PYT-001 · Python 中可变对象与不可变对象有什么区别，函数传参时实际传递的是什么？](answers/pyt/PYT-001.md) `P0`
- [ ] [PYT-002 · 浅拷贝与深拷贝有什么区别，嵌套字典、列表和张量对象可能出现哪些问题？](answers/pyt/PYT-002.md) `P0`
- [ ] [PYT-003 · Python 的 LEGB 作用域、闭包和 `nonlocal` 分别如何工作？](answers/pyt/PYT-003.md) `P0`
- [ ] [PYT-004 · 迭代器、生成器和普通容器有什么区别，生成器如何降低大规模数据处理的内存占用？](answers/pyt/PYT-004.md) `P0`
- [ ] [PYT-005 · 装饰器的本质是什么，如何实现一个同时支持同步和异步函数的计时或重试装饰器？](answers/pyt/PYT-005.md) `P0`
- [ ] [PYT-006 · Context Manager 的进入与退出协议是什么，如何使用它管理模型、文件、锁和数据库连接？](answers/pyt/PYT-006.md) `P0`
- [ ] [PYT-007 · Python 异常体系如何设计，什么时候应该捕获、包装、重新抛出或定义自定义异常？](answers/pyt/PYT-007.md) `P0`
- [ ] [PYT-008 · Python 的引用计数、循环引用和垃圾回收如何工作，长期运行的 Agent 服务为什么仍可能发生内存泄漏？](answers/pyt/PYT-008.md) `P1`
- [ ] [PYT-009 · 、`NamedTuple`、普通类和 Pydantic Model 分别适合哪些数据建模场景？](answers/pyt/PYT-009.md) `P1` `dataclass`
- [ ] [PYT-010 · Python 类型注解、泛型、Protocol 和静态类型检查能为大型 Agent 项目带来什么价值？](answers/pyt/PYT-010.md) `P1`
<a id="bank-2-section-2"></a>
### 并发、异步与任务调度

- [ ] [CON-001 · 进程、线程和协程的调度方式、内存模型和适用场景有什么区别？](answers/con/CON-001.md) `P0`
- [ ] [CON-002 · Python GIL 是什么，它会限制哪些工作负载，又不会限制哪些工作负载？](answers/con/CON-002.md) `P0`
- [ ] [CON-003 · CPU-Bound 与 IO-Bound 任务应分别选择多进程、多线程还是 `asyncio`？](answers/con/CON-003.md) `P0`
- [ ] [CON-004 · 、`await`、Coroutine、Task 和 Event Loop 之间是什么关系？](answers/con/CON-004.md) `P0` `async`
- [ ] [CON-005 · 异步代码中调用阻塞函数会发生什么，如何使用线程池、进程池或异步客户端修复？](answers/con/CON-005.md) `P0`
- [ ] [CON-006 · Race Condition、Deadlock、Livelock 和 Starvation 分别是什么，如何预防？](answers/con/CON-006.md) `P0`
- [ ] [CON-007 · Lock、RLock、Semaphore、Condition、Event 和 Queue 分别适合什么同步场景？](answers/con/CON-007.md) `P0`
- [ ] [CON-008 · 如何为并发工具调用实现超时、取消、结果聚合和部分失败处理？](answers/con/CON-008.md) `P0`
- [ ] [CON-009 · Backpressure 是什么，流式模型输出或批量任务系统如何避免生产者压垮消费者？](answers/con/CON-009.md) `P1`
- [ ] [CON-010 · 如何设计一个具有并发上限、优先级、公平性和可取消能力的异步任务调度器？](answers/con/CON-010.md) `P1`
<a id="bank-2-section-3"></a>
### 操作系统与 Linux

- [ ] [OSL-001 · 进程的虚拟地址空间通常包含哪些区域，栈、堆和内存映射分别存放什么？](answers/osl/OSL-001.md) `P0`
- [ ] [OSL-002 · 用户态与内核态有什么区别，一次系统调用大致经历哪些步骤？](answers/osl/OSL-002.md) `P0`
- [ ] [OSL-003 · 进程、线程和文件描述符在 Linux 中如何表示，为什么 Socket 也可以作为文件描述符操作？](answers/osl/OSL-003.md) `P0`
- [ ] [OSL-004 · Page Cache、Buffer Cache、Swap 和内存映射文件分别如何影响 IO 性能？](answers/osl/OSL-004.md) `P0`
- [ ] [OSL-005 · Linux 中 Zombie Process 与 Orphan Process 分别是什么，服务程序应如何正确回收子进程？](answers/osl/OSL-005.md) `P0`
- [ ] [OSL-006 · Signal 的作用是什么，如何让模型服务正确处理 `SIGTERM` 并完成优雅退出？](answers/osl/OSL-006.md) `P0`
- [ ] [OSL-007 · 、`htop`、`ps`、`free`、`df`、`du`、`lsof` 和 `ss` 分别用于排查什么问题？](answers/osl/OSL-007.md) `P0` `top`
- [ ] [OSL-008 · Linux 文件权限、用户组、`umask` 和最小权限原则如何影响模型文件与密钥管理？](answers/osl/OSL-008.md) `P1`
- [ ] [OSL-009 · Cgroup 与 Namespace 分别隔离和限制什么资源，它们与容器是什么关系？](answers/osl/OSL-009.md) `P1`
- [ ] [OSL-010 · Load Average、CPU Utilization、IO Wait 和 Context Switch 应如何结合判断系统瓶颈？](answers/osl/OSL-010.md) `P1`
<a id="bank-2-section-4"></a>
### 计算机网络、HTTP 与 RPC

- [ ] [NET-001 · TCP/IP 分层模型中各层分别解决什么问题，一次 HTTP 请求会经过哪些主要步骤？](answers/net/NET-001.md) `P0`
- [ ] [NET-002 · TCP 三次握手与四次挥手分别解决什么问题，`TIME_WAIT` 为什么存在？](answers/net/NET-002.md) `P0`
- [ ] [NET-003 · TCP 如何通过序列号、确认、重传、流量控制和拥塞控制保证可靠传输？](answers/net/NET-003.md) `P0`
- [ ] [NET-004 · HTTP/1.1、HTTP/2 和 HTTP/3 在连接复用、队头阻塞和传输协议上有什么区别？](answers/net/NET-004.md) `P0`
- [ ] [NET-005 · Keep-Alive、连接池、DNS 缓存和 TLS Session Resumption 为什么会影响模型 API 延迟？](answers/net/NET-005.md) `P0`
- [ ] [NET-006 · HTTP 中 GET、POST、PUT、PATCH 和 DELETE 的语义与幂等性有何区别？](answers/net/NET-006.md) `P0`
- [ ] [NET-007 · SSE、WebSocket 和普通流式 HTTP 分别适合哪些大模型流式输出场景？](answers/net/NET-007.md) `P0`
- [ ] [NET-008 · Connect Timeout、Read Timeout、Write Timeout 和 Total Timeout 分别控制什么？](answers/net/NET-008.md) `P0`
- [ ] [NET-009 · REST、gRPC 和消息队列式通信在接口约束、性能和耦合程度上如何选择？](answers/net/NET-009.md) `P1`
- [ ] [NET-010 · 反向代理、负载均衡、API Gateway 和 Service Mesh 分别位于什么层级并承担什么职责？](answers/net/NET-010.md) `P1`
<a id="bank-2-section-5"></a>
### 数据库与数据存储

- [ ] [DBS-001 · 关系型数据库中的主键、唯一索引、普通索引和联合索引有什么区别？](answers/dbs/DBS-001.md) `P0`
- [ ] [DBS-002 · B+ Tree 索引为什么适合数据库，联合索引的最左前缀原则是什么？](answers/dbs/DBS-002.md) `P0`
- [ ] [DBS-003 · 事务的 ACID 分别表示什么，Agent 长任务状态更新为什么需要事务边界？](answers/dbs/DBS-003.md) `P0`
- [ ] [DBS-004 · 脏读、不可重复读和幻读分别是什么，不同隔离级别如何处理？](answers/dbs/DBS-004.md) `P0`
- [ ] [DBS-005 · MVCC 的基本思想是什么，它如何减少读写之间的阻塞？](answers/dbs/DBS-005.md) `P0`
- [ ] [DBS-006 · 数据库连接池为什么必要，连接数过大或连接泄漏会产生什么后果？](answers/dbs/DBS-006.md) `P0`
- [ ] [DBS-007 · 如何分析一条慢 SQL，执行计划中的全表扫描、回表和索引失效意味着什么？](answers/dbs/DBS-007.md) `P0`
- [ ] [DBS-008 · 乐观锁与悲观锁分别适合什么并发冲突场景，版本号机制如何工作？](answers/dbs/DBS-008.md) `P1`
- [ ] [DBS-009 · 关系型数据库、文档数据库、键值存储和对象存储分别适合保存 Agent 系统中的哪些数据？](answers/dbs/DBS-009.md) `P1`
- [ ] [DBS-010 · 数据库 Schema 如何支持任务状态、事件日志、消息、工具调用和版本信息的可追溯性？](answers/dbs/DBS-010.md) `P1`
<a id="bank-2-section-6"></a>
### 缓存、消息队列与分布式基础

- [ ] [DST-001 · Cache Aside、Read Through 和 Write Through 模式分别如何工作？](answers/dst/DST-001.md) `P0`
- [ ] [DST-002 · 缓存穿透、击穿和雪崩分别是什么，常见治理方式有哪些？](answers/dst/DST-002.md) `P0`
- [ ] [DST-003 · Redis 中 String、Hash、List、Set、Sorted Set 和 Stream 分别适合哪些场景？](answers/dst/DST-003.md) `P0`
- [ ] [DST-004 · Redis 分布式锁应如何设计过期时间、唯一标识、续租和原子释放，为什么简单 `SETNX` 不够？](answers/dst/DST-004.md) `P0`
- [ ] [DST-005 · 消息队列如何实现系统解耦、削峰、异步处理和失败重试？](answers/dst/DST-005.md) `P0`
- [ ] [DST-006 · At-Most-Once、At-Least-Once 和 Exactly-Once 分别意味着什么，业务上如何实现幂等消费？](answers/dst/DST-006.md) `P0`
- [ ] [DST-007 · 消息重复、乱序、积压和死信分别如何发生，应该如何处理？](answers/dst/DST-007.md) `P0`
- [ ] [DST-008 · CAP 定理描述了什么，为什么网络分区发生时必须在一致性与可用性之间取舍？](answers/dst/DST-008.md) `P1`
- [ ] [DST-009 · 强一致、最终一致、线性一致和因果一致分别适合哪些系统？](answers/dst/DST-009.md) `P1`
- [ ] [DST-010 · 分布式系统中的时钟偏差、唯一 ID 和事件顺序为什么困难，常见解决思路有哪些？](answers/dst/DST-010.md) `P1`
<a id="bank-2-section-7"></a>
### 服务设计、可靠性与安全

- [ ] [SVC-001 · 什么是幂等性，创建任务、发送消息和执行支付等接口应如何设计幂等键？](answers/svc/SVC-001.md) `P0`
- [ ] [SVC-002 · 重试为什么可能放大故障，指数退避、随机抖动和重试预算分别解决什么问题？](answers/svc/SVC-002.md) `P0`
- [ ] [SVC-003 · Timeout、Retry、Circuit Breaker、Rate Limit 和 Bulkhead 如何组成服务韧性机制？](answers/svc/SVC-003.md) `P0`
- [ ] [SVC-004 · 令牌桶与漏桶限流算法有什么区别，如何同时支持租户配额和全局限流？](answers/svc/SVC-004.md) `P0`
- [ ] [SVC-005 · 如何设计模型服务或 Agent 服务的优雅降级，例如切换模型、减少工具、关闭非核心功能或返回缓存？](answers/svc/SVC-005.md) `P0`
- [ ] [SVC-006 · 鉴权与授权有什么区别，API Key、Session、JWT、OAuth 2.0 和 RBAC 分别适合什么场景？](answers/svc/SVC-006.md) `P0`
- [ ] [SVC-007 · 如何安全管理模型平台中的密钥、Token、数据库密码和第三方工具凭证？](answers/svc/SVC-007.md) `P0`
- [ ] [SVC-008 · SSRF、命令注入、路径遍历、反序列化和依赖供应链攻击如何威胁 Agent 工具系统？](answers/svc/SVC-008.md) `P0`
- [ ] [SVC-009 · 多租户系统如何实现身份隔离、数据隔离、资源配额、审计和成本归属？](answers/svc/SVC-009.md) `P1`
- [ ] [SVC-010 · RTO、RPO、SLA、SLO 和 Error Budget 分别是什么，如何用于制定服务可靠性目标？](answers/svc/SVC-010.md) `P1`
<a id="bank-2-section-8"></a>
### Git、Docker 与 CI/CD

- [ ] [DEV-001 · Git 的 Working Tree、Index、Commit 和 Branch 分别是什么，`add` 与 `commit` 实际完成什么操作？](answers/dev/DEV-001.md) `P0`
- [ ] [DEV-002 · 、`rebase`、`cherry-pick` 和 `revert` 分别适合什么场景？](answers/dev/DEV-002.md) `P0` `merge`
- [ ] [DEV-003 · 如何处理代码冲突、误提交密钥、错误合并和已经推送的错误 Commit？](answers/dev/DEV-003.md) `P0`
- [ ] [DEV-004 · Docker Image、Container、Layer、Volume 和 Network 分别是什么？](answers/dev/DEV-004.md) `P0`
- [ ] [DEV-005 · 如何编写体积较小、构建稳定且安全的 Python 模型服务 Dockerfile？](answers/dev/DEV-005.md) `P0`
- [ ] [DEV-006 · 容器中的端口、环境变量、挂载目录、GPU 设备和文件权限应如何配置？](answers/dev/DEV-006.md) `P0`
- [ ] [DEV-007 · Docker Compose、Kubernetes Deployment、Service 和 ConfigMap/Secret 分别解决什么问题？](answers/dev/DEV-007.md) `P1`
- [ ] [DEV-008 · Readiness Probe、Liveness Probe 和 Startup Probe 有何区别，模型加载较慢时应如何配置？](answers/dev/DEV-008.md) `P1`
- [ ] [DEV-009 · CI 流水线通常应包含哪些代码检查、测试、构建和安全扫描步骤？](answers/dev/DEV-009.md) `P1`
- [ ] [DEV-010 · 蓝绿发布、滚动发布、金丝雀发布和 Feature Flag 分别如何降低上线风险？](answers/dev/DEV-010.md) `P1`
<a id="bank-2-section-9"></a>
### 软件设计、测试与代码质量

- [ ] [SWE-001 · 高内聚、低耦合、单一职责和依赖倒置在 Agent Runtime 中应如何体现？](answers/swe/SWE-001.md) `P0`
- [ ] [SWE-002 · 接口、抽象基类、组合和继承应如何选择，为什么工程中通常优先组合？](answers/swe/SWE-002.md) `P0`
- [ ] [SWE-003 · Adapter、Strategy、Factory、Observer 和 State Pattern 分别适合 Agent 系统中的哪些组件？](answers/swe/SWE-003.md) `P0`
- [ ] [SWE-004 · 单元测试、集成测试、端到端测试和回归测试分别验证什么？](answers/swe/SWE-004.md) `P0`
- [ ] [SWE-005 · Mock、Stub、Fake 和 Spy 有什么区别，测试模型 API 与外部工具时应如何使用？](answers/swe/SWE-005.md) `P0`
- [ ] [SWE-006 · 如何测试具有随机输出、网络依赖和异步执行的大模型应用？](answers/swe/SWE-006.md) `P0`
- [ ] [SWE-007 · Property-Based Testing、Golden Test 和 Snapshot Test 分别适合验证什么？](answers/swe/SWE-007.md) `P0`
- [ ] [SWE-008 · 如何设计向后兼容的配置、事件协议、数据库 Schema 和工具接口？](answers/swe/SWE-008.md) `P1`
- [ ] [SWE-009 · 如何通过代码审查识别过度设计、隐藏副作用、异常吞噬和资源泄漏？](answers/swe/SWE-009.md) `P1`
- [ ] [SWE-010 · 如何建立格式化、Lint、类型检查、测试覆盖率和依赖锁定的统一质量门禁？](answers/swe/SWE-010.md) `P1`
<a id="bank-2-section-10"></a>
### 可观测性、性能分析与故障排查

- [ ] [OBS-001 · Log、Metric、Trace 和 Profile 分别回答什么问题，为什么不能只依赖日志？](answers/obs/OBS-001.md) `P0`
- [ ] [OBS-002 · 如何设计结构化日志，并使用 Request ID、Trace ID、Task ID 和 User/Tenant ID 串联一次 Agent 调用？](answers/obs/OBS-002.md) `P0`
- [ ] [OBS-003 · RED、USE 和 Golden Signals 分别从什么角度监控服务？](answers/obs/OBS-003.md) `P0`
- [ ] [OBS-004 · P50、P95、P99 延迟分别说明什么，为什么平均延迟可能掩盖线上问题？](answers/obs/OBS-004.md) `P0`
- [ ] [OBS-005 · 如何区分 CPU、内存、磁盘 IO、网络、数据库、外部 API 和 GPU 导致的性能瓶颈？](answers/obs/OBS-005.md) `P0`
- [ ] [OBS-006 · 内存持续增长时，应如何区分缓存增长、对象泄漏、连接泄漏、Tensor 未释放和进程碎片？](answers/obs/OBS-006.md) `P0`
- [ ] [OBS-007 · 服务出现间歇性超时时，应该按照什么顺序检查客户端、网络、网关、线程池、连接池和下游服务？](answers/obs/OBS-007.md) `P0`
- [ ] [OBS-008 · Agent 任务成功率下降时，如何利用 Trace 将问题归因到模型、上下文、工具、环境或状态管理？](answers/obs/OBS-008.md) `P0`
- [ ] [OBS-009 · 压测中的并发数、QPS、吞吐、响应时间和资源利用率是什么关系，如何避免把压测工具本身变成瓶颈？](answers/obs/OBS-009.md) `P1`
- [ ] [OBS-010 · 如何建立故障复盘，包括影响范围、时间线、根因、修复、预防措施和后续验证？](answers/obs/OBS-010.md) `P1`
