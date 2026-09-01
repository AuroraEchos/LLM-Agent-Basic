<!-- 此文件由 scripts/build_index.py 自动生成，请勿手工编辑。 -->
# 知识库索引

> 点击问题即可进入对应的答案笔记。填写“我的答案”后，下一次生成索引时会自动勾选。

当前进度：**120 / 120**

## 题库导航

- [LLM 与 Agent 核心面试题](#bank-1)（120 题）

<a id="bank-1"></a>
## LLM 与 Agent 核心面试题

题目来源：[CORE_INTERVIEW_QUESTIONS.md](CORE_INTERVIEW_QUESTIONS.md)

<a id="bank-1-section-1"></a>
### 项目与简历深挖

- [x] [EXP-001 · 请用三分钟介绍一个你最有代表性的 LLM 或 Agent 项目，并说明你的个人贡献。](answers/exp/EXP-001.md)
- [x] [EXP-002 · 这个项目解决了什么业务问题，为什么需要使用大模型而不是传统方案？](answers/exp/EXP-002.md)
- [x] [EXP-003 · 项目的离线指标、在线指标和最终业务收益分别是什么？](answers/exp/EXP-003.md)
- [x] [EXP-004 · 你如何设计项目的基线方案，并证明后续优化确实有效？](answers/exp/EXP-004.md)
- [x] [EXP-005 · 项目中最困难的问题是什么，你如何定位根因并完成验证？](answers/exp/EXP-005.md)
- [x] [EXP-006 · 你做过哪些失败的尝试，失败原因是什么？](answers/exp/EXP-006.md)
- [x] [EXP-010 · 你的方案在延迟、吞吐、质量和成本之间做了哪些权衡？](answers/exp/EXP-010.md)
- [x] [EXP-012 · 线上出现模型效果退化时，你会按照什么顺序排查？](answers/exp/EXP-012.md)
<a id="bank-1-section-2"></a>
### LLM 与 Transformer 基础

- [x] [ARC-001 · 请完整描述原始 Transformer 的 Encoder、Decoder 及其数据流。](answers/arc/ARC-001.md)
- [x] [ARC-003 · 请从矩阵形状出发推导 Scaled Dot-Product Attention 的完整计算过程。](answers/arc/ARC-003.md)
- [x] [ARC-004 · 为什么 Attention 的 logits 要除以 \(\sqrt{d_k}\)？如果不缩放会怎样？](answers/arc/ARC-004.md)
- [x] [ARC-005 · Self-Attention 的时间复杂度、空间复杂度和主要瓶颈分别是什么？](answers/arc/ARC-005.md)
- [x] [ARC-007 · MHA、MQA、GQA 和 MLA 在参数、计算和 KV Cache 上有什么区别？](answers/arc/ARC-007.md)
- [x] [ARC-009 · Causal Mask 的作用是什么，训练和推理时如何构造？](answers/arc/ARC-009.md)
- [x] [ARC-011 · RoPE 如何把相对位置信息编码进 Query 和 Key？](answers/arc/ARC-011.md)
- [x] [ARC-015 · LayerNorm 与 BatchNorm 的归一化维度、训练行为和适用场景有何不同？](answers/arc/ARC-015.md)
- [x] [ARC-017 · RMSNorm 与 LayerNorm 有什么区别，为什么现代 LLM 常使用 RMSNorm？](answers/arc/ARC-017.md)
- [x] [ARC-018 · 标准 FFN、GLU、GEGLU 和 SwiGLU 的结构与参数量有何不同？](answers/arc/ARC-018.md)
- [x] [ARC-020 · Encoder-Only、Decoder-Only 和 Encoder-Decoder 模型分别适合哪些任务？](answers/arc/ARC-020.md)
- [x] [ARC-021 · 为什么主流生成式 LLM 多采用 Decoder-Only 架构？这一判断有哪些例外？](answers/arc/ARC-021.md)
- [x] [ARC-029 · 如何估算一个 Decoder-Only Transformer 的参数量？](answers/arc/ARC-029.md)
- [x] [DAT-001 · 请描述 BPE 的训练过程和对新文本的编码过程。](answers/dat/DAT-001.md)
- [x] [DAT-002 · BPE、Byte-Level BPE、WordPiece、Unigram 和 SentencePiece 有什么区别？](answers/dat/DAT-002.md)
<a id="bank-1-section-3"></a>
### 训练、微调与对齐

- [x] [OPT-001 · Decoder-Only LLM 的 Next-Token Prediction 损失如何计算？](answers/opt/OPT-001.md)
- [x] [OPT-002 · 交叉熵、信息熵、负对数似然和 KL 散度之间是什么关系？](answers/opt/OPT-002.md)
- [x] [OPT-003 · Perplexity 的定义是什么，它为什么不能完整反映生成质量？](answers/opt/OPT-003.md)
- [x] [OPT-005 · 如何在多轮对话和 Packing 数据中正确构造 Loss Mask？](answers/opt/OPT-005.md)
- [x] [OPT-009 · Warmup 为什么有助于大模型稳定训练，步数应如何选择？](answers/opt/OPT-009.md)
- [x] [OPT-011 · 梯度消失和梯度爆炸的成因及排查方法是什么？](answers/opt/OPT-011.md)
- [x] [OPT-013 · FP16、BF16、FP8 和 FP32 在指数范围、有效精度和硬件支持上有何差异？](answers/opt/OPT-013.md)
- [x] [FT-001 · 预训练、Continued Pretraining、SFT 和偏好对齐的训练目标分别是什么？](answers/ft/FT-001.md)
- [x] [FT-002 · 指令微调数据通常包含哪些字段，哪些 token 应计算损失？](answers/ft/FT-002.md)
- [x] [FT-004 · Chat Template 不一致会对训练和推理产生什么影响？](answers/ft/FT-004.md)
- [x] [FT-005 · 指令微调中数据质量、数量、多样性和难度如何权衡？](answers/ft/FT-005.md)
- [x] [FT-007 · 全量微调、LoRA 和 QLoRA 应如何选择？](answers/ft/FT-007.md)
- [x] [FT-008 · LoRA 的低秩假设是什么，前向计算与参数量如何推导？](answers/ft/FT-008.md)
- [x] [ALN-001 · 经典 RLHF 的 SFT、Reward Model 和 Policy Optimization 三个阶段如何衔接？](answers/aln/ALN-001.md)
- [x] [ALN-010 · DPO 如何从 KL 正则化的 RL 目标推导出直接偏好损失？](answers/aln/ALN-010.md)
<a id="bank-1-section-4"></a>
### 推理与部署

- [x] [INF-001 · Prefill 与 Decode 两个阶段的计算特征和性能瓶颈有什么不同？](answers/inf/INF-001.md)
- [x] [INF-002 · KV Cache 为什么能够降低自回归解码的重复计算？](answers/inf/INF-002.md)
- [x] [INF-003 · 如何根据层数、KV 头数、Head Dim、序列长度、Batch Size 和数据类型计算 KV Cache 显存？](answers/inf/INF-003.md)
- [x] [INF-008 · FlashAttention 为什么是 IO-Aware 的，它如何避免物化完整注意力矩阵？](answers/inf/INF-008.md)
- [x] [INF-011 · PagedAttention 如何利用分页思想管理不定长请求的 KV Cache？](answers/inf/INF-011.md)
- [x] [INF-012 · Continuous Batching 与静态 Batching 的调度差异是什么？](answers/inf/INF-012.md)
- [x] [INF-014 · Greedy Search、Beam Search 和 Sampling 的目标与适用任务有何不同？](answers/inf/INF-014.md)
- [x] [INF-020 · 如何使用有限状态机或 Grammar 保证 JSON、SQL 等结构化输出合法？](answers/inf/INF-020.md)
- [x] [INF-026 · TTFT、TPOT、ITL、吞吐量和端到端延迟分别如何定义？](answers/inf/INF-026.md)
- [x] [DEP-001 · 模型量化的基本目标是什么，Weight、Activation 和 KV Cache 量化有何区别？](answers/dep/DEP-001.md)
- [x] [DEP-016 · vLLM、TensorRT-LLM、SGLang、llama.cpp 和 DeepSpeed-Inference 如何选型？](answers/dep/DEP-016.md)
- [x] [DEP-021 · 如何针对吞吐优先、延迟优先和成本优先三种目标选择部署方案？](answers/dep/DEP-021.md)
<a id="bank-1-section-5"></a>
### RAG 与知识系统

- [x] [RAG-001 · RAG 的离线索引和在线查询全链路分别包含哪些阶段？](answers/rag/RAG-001.md)
- [x] [RAG-002 · RAG 与微调分别适合解决知识更新、风格适配和能力学习中的哪些问题？](answers/rag/RAG-002.md)
- [x] [RAG-003 · PDF、网页、表格和扫描文档的解析与清洗难点分别是什么？](answers/rag/RAG-003.md)
- [x] [RAG-004 · Fixed、Recursive、Semantic 和 Structure-Aware Chunking 如何选择？](answers/rag/RAG-004.md)
- [x] [RAG-005 · Chunk Size 与 Overlap 如何影响召回率、上下文完整性、延迟和成本？](answers/rag/RAG-005.md)
- [x] [RAG-007 · Embedding 模型应从语言、领域、维度、长度和成本哪些方面选型？](answers/rag/RAG-007.md)
- [x] [RAG-009 · 向量检索、BM25 和混合检索各自擅长哪些查询？](answers/rag/RAG-009.md)
- [x] [RAG-013 · HyDE、Multi-Query、Step-Back 和 Query Decomposition 分别适合什么查询？](answers/rag/RAG-013.md)
- [x] [RAG-015 · Bi-Encoder 检索与 Cross-Encoder Reranking 的差别是什么？](answers/rag/RAG-015.md)
- [x] [RAG-016 · Retrieval Top-K、Rerank Top-N 和最终上下文数量如何调优？](answers/rag/RAG-016.md)
- [x] [RAG-018 · 如何让答案携带可验证的引用，并检测引用与原文是否一致？](answers/rag/RAG-018.md)
- [x] [RAG-019 · Recall@K、MRR、NDCG、Context Precision 和 Faithfulness 分别评估什么？](answers/rag/RAG-019.md)
- [x] [RAG-020 · 如何使用 RAGAS 或自建评测集评估端到端 RAG？](answers/rag/RAG-020.md)
- [x] [RAG-022 · 如何区分检索失败、重排失败、上下文构造失败和生成失败？](answers/rag/RAG-022.md)
- [x] [RAG-026 · 多租户 RAG 如何实现权限过滤、数据隔离和审计？](answers/rag/RAG-026.md)
- [x] [RAG-028 · RAG 系统如何抵御文档中的 Prompt Injection 与数据投毒？](answers/rag/RAG-028.md)
<a id="bank-1-section-6"></a>
### Agent、工具与上下文工程

- [x] [AGT-001 · LLM Agent 的模型、规划、工具、记忆和执行环境分别承担什么职责？](answers/agt/AGT-001.md)
- [x] [AGT-002 · ReAct 如何交替进行推理与行动，它与 CoT、Act-Only 有何差异？](answers/agt/AGT-002.md)
- [x] [AGT-004 · Agent 应在什么条件下制定计划、重规划或直接执行？](answers/agt/AGT-004.md)
- [x] [AGT-005 · Function Calling 的工具定义、模型决策、执行和结果回传流程是什么？](answers/agt/AGT-005.md)
- [x] [AGT-006 · 如何编写高质量的工具名称、Description 和 JSON Schema？](answers/agt/AGT-006.md)
- [x] [AGT-009 · 串行、并行和依赖图式工具调用分别如何调度？](answers/agt/AGT-009.md)
- [x] [AGT-010 · 工具调用如何实现超时、重试、幂等、熔断和降级？](answers/agt/AGT-010.md)
- [x] [AGT-011 · 如何验证工具输出，避免把错误结果继续传播给后续步骤？](answers/agt/AGT-011.md)
- [x] [AGT-012 · 涉及支付、删除、发信等高风险操作时，如何设计确认和权限边界？](answers/agt/AGT-012.md)
- [x] [AGT-013 · MCP 的 Host、Client、Server 分别是什么，它提供哪些核心能力？](answers/agt/AGT-013.md)
- [x] [AGT-014 · MCP 与模型原生 Function Calling 处于什么层级，二者如何协作？](answers/agt/AGT-014.md)
- [x] [AGT-017 · 连接不可信 MCP Server 时有哪些安全风险和隔离措施？](answers/agt/AGT-017.md)
- [x] [AGT-018 · Agent 的工作记忆、短期记忆、长期记忆和外部知识如何划分？](answers/agt/AGT-018.md)
- [x] [AGT-019 · 记忆的写入、检索、更新、合并和遗忘策略应如何设计？](answers/agt/AGT-019.md)
- [x] [AGT-027 · Agent 的状态机、事件循环和有向图编排分别适合什么复杂度？](answers/agt/AGT-027.md)
- [x] [AGT-029 · 如何避免 Agent 陷入循环、无限重试或持续无效调用？](answers/agt/AGT-029.md)
- [x] [AGT-030 · Agent 的停止条件、最大步数和预算应如何设计？](answers/agt/AGT-030.md)
- [x] [AGT-031 · Browser、代码执行和文件系统工具分别需要哪些沙箱机制？](answers/agt/AGT-031.md)
- [x] [AGT-032 · Human-in-the-Loop 应插入 Agent 工作流的哪些位置？](answers/agt/AGT-032.md)
- [x] [AGT-033 · 如何记录 Agent 的 Trace，并从 Trace 中定位规划或工具错误？](answers/agt/AGT-033.md)
- [x] [AGT-034 · 如何为 Agent 构建任务成功率、步骤效率、工具正确率和成本评测？](answers/agt/AGT-034.md)
- [x] [AGT-035 · 如何设计一个能够中断、恢复和持久化长任务的 Agent Runtime？](answers/agt/AGT-035.md)
- [x] [AGT-036 · 什么是 Agent Harness，它与基础模型、Agent Framework 和 Agent Runtime 的边界分别是什么？](answers/agt/AGT-036.md)
- [x] [AGT-040 · Context Engineering 与 Prompt Engineering 有什么区别，前者通常覆盖哪些系统组件？](answers/agt/AGT-040.md)
- [x] [AGT-041 · System Prompt、用户目标、任务状态、工具定义、检索内容、记忆和执行反馈应按照什么原则组织进上下文？](answers/agt/AGT-041.md)
- [x] [AGT-042 · 在上下文窗口受限时，如何在任务指令、历史轨迹、工具结果、检索证据和输出预算之间分配 token？](answers/agt/AGT-042.md)
- [x] [AGT-043 · 如何压缩或总结长轨迹，同时避免丢失约束、未完成事项、关键实体和可恢复状态？](answers/agt/AGT-043.md)
- [x] [AGT-044 · Context Rot、Lost in the Middle、指令冲突和历史污染分别如何影响 Agent，应该如何缓解？](answers/agt/AGT-044.md)
- [x] [AGT-046 · 为什么任务状态不应只存在于对话文本中，如何建立外部状态存储与 Single Source of Truth？](answers/agt/AGT-046.md)
- [x] [AGT-047 · 如何为系统指令、用户输入、检索文档、网页内容和工具结果建立信任分层，防止间接 Prompt Injection 污染上下文？](answers/agt/AGT-047.md)
<a id="bank-1-section-7"></a>
### 评估、幻觉与安全

- [x] [EVA-002 · 自动 Benchmark、人工评测、LLM-as-Judge 和竞技场评测有何优缺点？](answers/eva/EVA-002.md)
- [x] [EVA-003 · LLM-as-Judge 的位置、长度、自我偏好和风格偏差如何控制？](answers/eva/EVA-003.md)
- [x] [EVA-005 · 如何校准 Judge，并测量其与人工标注的一致性？](answers/eva/EVA-005.md)
- [x] [EVA-008 · 离线评测提升为什么可能无法转化为线上业务提升？](answers/eva/EVA-008.md)
- [x] [EVA-010 · 如何对 Prompt、模型、采样参数、检索器和工具版本做回归测试？](answers/eva/EVA-010.md)
- [x] [EVA-011 · 事实性幻觉、忠实度幻觉和指令不遵循如何区分？](answers/eva/EVA-011.md)
- [x] [EVA-012 · RAG、微调、验证器、自洽性和拒答机制分别能缓解哪些幻觉？](answers/eva/EVA-012.md)
- [x] [EVA-014 · 越狱、Prompt Injection、数据泄漏、有害输出和偏见有什么区别？](answers/eva/EVA-014.md)
- [x] [EVA-016 · 输入过滤、模型对齐、工具隔离、输出审核和人工复核如何组成纵深防御？](answers/eva/EVA-016.md)
- [x] [EVA-017 · 直接 Prompt Injection 与间接 Prompt Injection 有何差异？](answers/eva/EVA-017.md)
- [x] [EVA-019 · 如何防止工具调用中的权限提升、参数注入和 Confused Deputy 问题？](answers/eva/EVA-019.md)
- [x] [EVA-028 · 如何建立线上 Bad Case 收集、聚类、归因和闭环修复流程？](answers/eva/EVA-028.md)
<a id="bank-1-section-8"></a>
### 代码与系统设计

- [x] [COD-001 · 使用 PyTorch 手写支持 Mask 的 Scaled Dot-Product Self-Attention。](answers/cod/COD-001.md)
- [x] [COD-014 · 手写批量余弦相似度检索并返回 Top-K 文档。](answers/cod/COD-014.md)
- [x] [CON-008 · 如何为并发工具调用实现超时、取消、结果聚合和部分失败处理？](answers/con/CON-008.md)
- [x] [OBS-008 · Agent 任务成功率下降时，如何利用 Trace 将问题归因到模型、上下文、工具、环境或状态管理？](answers/obs/OBS-008.md)
- [x] [SYS-007 · 设计一个企业级 RAG 系统，覆盖索引、查询、权限、引用和评估。](answers/sys/SYS-007.md)
- [x] [SYS-011 · 设计一个可靠 Agent 系统，覆盖规划、工具、状态、重试、沙箱和观测。](answers/sys/SYS-011.md)
- [x] [SYS-014 · 设计一个能够执行数小时任务、支持中断恢复和人工审批的 Agent。](answers/sys/SYS-014.md)
- [x] [SYS-015 · 设计一个安全的代码生成与执行 Agent。](answers/sys/SYS-015.md)
- [x] [SYS-016 · 设计一个企业内部 MCP 工具平台，覆盖注册、权限、审计和版本治理。](answers/sys/SYS-016.md)
- [x] [SYS-020 · 设计一个 LLM-as-Judge 评测平台，并控制偏差、成本和可复现性。](answers/sys/SYS-020.md)
- [x] [SYS-021 · 设计一个模型安全网关，处理越狱、Prompt Injection、敏感数据和过度拒答。](answers/sys/SYS-021.md)
- [x] [SYS-022 · 设计一个线上 Bad Case 发现、聚类、标注和回归闭环系统。](answers/sys/SYS-022.md)
